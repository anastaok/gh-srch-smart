import styles from "./LayoutStyles.module.scss";

type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<TLayoutProps> = ({ children }) => {
  return <main className={styles.layout}>{children}</main>;
};
