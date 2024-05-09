import { autorun, makeAutoObservable, runInAction } from "mobx";

import { getData } from "../utils/api";
import { TRepository } from "../types/types";
import { STORE_NAME } from "../constants/store-constants";

class SearchStore {
  title: string = "";
  copiedText: string = "";
  isLoading: boolean = false;
  repositories: TRepository[] = [];
  favoriteRepositories: TRepository[] = [];

  constructor() {
    makeAutoObservable(this);

    this.loadFromLocalStorage();

    autorun(() => {
      const data = {
        favoriteRepositories: this.favoriteRepositories,
      };
      localStorage.setItem(STORE_NAME, JSON.stringify(data));
    });
  }

  loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(STORE_NAME) || "{}");
    this.favoriteRepositories = data.favoriteRepositories || [];
  }

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.title = event.currentTarget.value.trim();
  };

  loadRepositories = async (title: string) => {
    runInAction(() => {
      this.isLoading = true;
    });

    if (!title) {
      runInAction(() => {
        this.repositories = [];
        this.isLoading = false;
      });
      return;
    }

    try {
      const data = await getData(title);
      runInAction(() => {
        this.repositories = data.items;
        this.isLoading = false;
      });
    } catch (error) {
      console.error("Failed to load repositories:", error);
      runInAction(() => {
        this.repositories = [];
        this.isLoading = false;
      });
    }
  };

  markAsFavorite = async (repository: TRepository) => {
    const index = this.favoriteRepositories.findIndex(
      ({ id }) => id === repository.id
    );

    if (index !== -1) {
      runInAction(() => {
        this.favoriteRepositories.splice(index, 1);
      });
      return;
    }
    runInAction(() => {
      this.favoriteRepositories.push(repository);
    });
  };

  openCardInfo = (cardId: number) => {
    return [...this.repositories, ...this.favoriteRepositories].find(
      ({ id }) => id === cardId
    );
  };
}

const store = new SearchStore();

export default store;
