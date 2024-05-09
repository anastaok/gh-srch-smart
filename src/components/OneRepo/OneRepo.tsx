import { observer } from "mobx-react-lite";

import store from "../../store/store";

import eye from "../../assets/eye.svg";
import fork from "../../assets/fork.svg";
import star from "../../assets/star.svg";
import heart from "../../assets/heart.svg";
import heart_fill from "../../assets/heart_fill.svg";
import { TRepository } from "../../types/types";

import { DESCRIPTION, LANGUAGE } from "../../constants/pages-constants";

import styles from "./OneRepoStyles.module.scss";

type TOneRepoProps = {
  card: TRepository;
};

export const OneRepo: React.FC<TOneRepoProps> = observer(({ card }) => {
  const { markAsFavorite, favoriteRepositories } = store;
  const {
    id: cardId,
    forks,
    owner,
    html_url,
    watchers,
    language,
    full_name,
    description,
    stargazers_count,
  } = card;

  return (
    <div className={styles.oneRepoWrapper} id={String(cardId)}>
      <div className={styles.oneRepoInnerWrapper}>
        <img
          className={styles.oneRepoAvatar}
          src={owner.avatar_url}
          alt="oneRepoAvatar"
        />
        <h2 className={styles.oneRepoTitle}>
          <a href={html_url} target="_blank" rel="noreferrer">
            {full_name}
          </a>
        </h2>
      </div>

      {description ? (
        <p className={styles.oneRepoText}>
          {DESCRIPTION} {description}
        </p>
      ) : (
        ""
      )}

      {language ? (
        <p className={styles.oneRepoText}>
          {LANGUAGE} {language}
        </p>
      ) : (
        ""
      )}

      <div className={styles.oneRepoStatsWrapper}>
        <div className={styles.oneRepoStatsText}>
          <img src={star} />
          <p>{stargazers_count}</p>
        </div>
        <div className={styles.oneRepoStatsText}>
          <img src={fork} />
          <p>{forks ?? "0"}</p>
        </div>

        <div className={styles.oneRepoStatsText}>
          <img src={eye} />
          <p>{watchers ?? "0"}</p>
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
