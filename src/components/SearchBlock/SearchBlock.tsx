import throttle from "lodash.throttle";
import clipboardCopy from "clipboard-copy";
import { observer } from "mobx-react-lite";
import { useEffect, useCallback, useState } from "react";

import store from "../../store/store";

import {
  COPIED,
  COPY,
  FAVORITE_REPOS_TITLE,
  SEARCH_PLACEHOLDER,
} from "../../constants/pages-constants";
import { Button } from "../Button/Button";

import styles from "./SearchBlockStyles.module.scss";

export const SearchBlock = observer(() => {
  const [buttonTitle, setButtonTitle] = useState(COPY);

  const { title, loadRepositories, handleInputChange } = store;

  const throttledLoadRepositories = useCallback(
    throttle((title) => {
      loadRepositories(title);
    }, 2000),
    [loadRepositories]
  );

  useEffect(() => {
    throttledLoadRepositories(title);
  }, [throttledLoadRepositories, title]);

  const handleCopy = useCallback(async () => {
    setButtonTitle(COPIED);
    await clipboardCopy(title);
    setTimeout(() => {
      setButtonTitle(COPY);
    }, 2000);
  }, [title]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.seacrhBlock}>
      <div className={styles.inputBlock}>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onInput={handleInputChange}
            className={styles.inputInner}
            placeholder={SEARCH_PLACEHOLDER}
          />
        </form>
        <Button title={buttonTitle} onClick={handleCopy} />
      </div>

      <p className={styles.saved}>{FAVORITE_REPOS_TITLE}</p>
    </div>
  );
});
