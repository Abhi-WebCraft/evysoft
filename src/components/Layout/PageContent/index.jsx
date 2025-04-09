import styles from './PageContent.module.css';

export default function PageContent({ children }) {
  return (
    <div className={styles.pageContentCol}>
      {children}
    </div>
  );
}
