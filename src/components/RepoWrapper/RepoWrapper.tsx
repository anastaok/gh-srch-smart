import styles from "./RepoWrapperStyles.module.scss";

type TRepoWrapperProps = {
  children: React.ReactNode;
};

export const RepoWrapper: React.FC<TRepoWrapperProps> = ({ children }) => {
  return <main className={styles.repoWrapper}>{children}</main>;
};
