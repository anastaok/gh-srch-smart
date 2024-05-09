import { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import store from "../../../store/store";

import fork from "../../../assets/fork.svg";
import star from "../../../assets/star.svg";
import heart from "../../../assets/heart.svg";
import heart_fill from "../../../assets/heart_fill.svg";

import { Button } from "../../Button";
import { TRepository } from "../../../types/types";

import styles from "./RepoItemStyles.module.scss";

export type TRepoItemProps = {
  card: TRepository;
};

export const RepoItem: React.FC<TRepoItemProps> = observer(({ card }) => {
  const { favoriteRepositories, markAsFavorite } = store;
  const {
    id: cardId,
    owner,
    forks,
    html_url,
    full_name,
    stargazers_count,
  } = card;

  const navigate = useNavigate();
  const handleNavigate = useCallback(() => {
    navigate(`/repository/${cardId}`);
  }, [navigate]);

  return (
    <div className={styles.repoWrapper} id={String(cardId)}>
      <div className={styles.repoInnerWrapper}>
        <img
          className={styles.repoAvatar}
          src={owner.avatar_url}
          alt="repoAvatar"
        />
        <a href={html_url} target="_blank" rel="noreferrer">
          <h2 className={styles.repoTitle}>{full_name}</h2>
        </a>
      </div>

      <div className={styles.repoStatsWrapper}>
        <Button title="More" onClick={handleNavigate} />

        <div className={styles.repoStatsText}>
          <img src={star} />
          <p>{stargazers_count}</p>
        </div>
        <div className={styles.repoStatsText}>
          <img src={fork} />
          <p>{forks ?? "0"}</p>
        </div>

        <button
          className={styles.favoriteButton}
          onClick={() => markAsFavorite(card)}
        >
          {favoriteRepositories.some(({ id }) => id === cardId) ? (
            <img src={heart_fill} />
          ) : (
            <img src={heart} />
          )}
        </button>
      </div>
    </div>
  );
});
