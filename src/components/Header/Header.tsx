import { memo } from "react";

import styles from "./HeaderStyles.module.scss";

type THeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<THeaderProps> = memo(({ children }) => {
  return <header className={styles.header}>{children}</header>;
});
