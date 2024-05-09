import { memo } from "react";

import styles from "./ButtonStyles.module.scss";

type TCardButton = {
  title: string;
  onClick: () => void;
};

export const Button: React.FC<TCardButton> = memo(({ title, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {title}
  </button>
));
