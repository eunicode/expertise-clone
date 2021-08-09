import styles from "./cardTag.module.css";

export default function CardTag({ professional }) {
  return (
    <div className={styles.cardTopTagCont}>
      {professional.tags.map((tag, i) => {
        return (
          <div key={i} className={styles.cardTopTag}>
            {tag}
          </div>
        );
      })}
    </div>
  );
}
