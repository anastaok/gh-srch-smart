import { observer } from "mobx-react-lite";

import store from "../../store/store";

import { RepoItem } from "./RepoItem";

export const FavoriteRepositories = observer(() => (
  <>
    {store.favoriteRepositories.map((card) => (
      <RepoItem key={card.id} card={card} />
    ))}
  </>
));
