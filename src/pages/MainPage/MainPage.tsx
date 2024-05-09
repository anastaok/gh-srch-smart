import { observer } from "mobx-react-lite";

import store from "../../store/store";

import {
  LOADING,
  MAIN_PAGE_TITLE,
  REPOSITORY_NOT_FOUND,
} from "../../constants/pages-constants";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { RepoWrapper } from "../../components/RepoWrapper";
import { SearchBlock } from "../../components/SearchBlock";
import { RepoBlock } from "../../components/RepoBlock/RepoBlock";
import { FavoriteRepositories } from "../../components/RepoBlock/FavoriteRepositories";

import styles from "./MainPageStyles.module.scss";

export const MainPage = observer(() => {
  const { isLoading, repositories, favoriteRepositories } = store;

  return (
    <Layout>
      <Header>{MAIN_PAGE_TITLE}</Header>
      <SearchBlock />
      <RepoWrapper>
        <div className={styles.mainWrapper}>
          {isLoading ? (
            <p className={styles.mainText}>{LOADING}</p>
          ) : (
            <RepoBlock />
          )}
          <p className={styles.mainText}>
            {!repositories.length && !isLoading && REPOSITORY_NOT_FOUND}
          </p>
        </div>

        <div className={styles.mainWrapper}>
          {favoriteRepositories ? <FavoriteRepositories /> : ""}
        </div>
      </RepoWrapper>
    </Layout>
  );
});
