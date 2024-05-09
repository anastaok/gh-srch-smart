import { observer } from "mobx-react-lite";

import store from "../../store/store";

import { RepoItem } from "./RepoItem";

import { TRepository } from "../../types/types";

export const RepoBlock = observer(() => (
  <>
    {store.repositories.map((repo: TRepository) => (
      <RepoItem key={repo.id} card={repo} />
    ))}
  </>
));
