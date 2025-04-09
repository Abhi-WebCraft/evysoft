import styles from './SectionTitle.module.css';

export default function SectionTitle({ subtitle, title, titlespan, content }) {
  return (
    <div className={styles.sectionTitleSection}>
      {subtitle ? <div className={styles.sectionSubTitle}>{subtitle}</div> : ""}
      <h2 className={`${styles.sectionHeading} title-anim`}>
        {title} <span className={styles.titleSpan}>{titlespan}</span>
      </h2>
      {content ? (
        <div
          className={styles.sectionTitleContent}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}
