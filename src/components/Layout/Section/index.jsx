import styles from './Section.module.css'; 

export default function Section({ children, className }) {
  return <section className={`${styles.sectionWrapper} ${className}`}>{children}</section>;
}
