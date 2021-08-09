import styles from "./cardFooter.module.css";

export default function CardFooter({ professional }) {
  return (
    <div className={styles.cardFooter}>
      <div className={styles.cardFooterSect}>
        <div>Reputation: {professional.reputation}</div>
        <div>More Info</div>
      </div>

      <div className={styles.cardFooterSect}>
        <div>Professionalism: {professional.professionalism}</div>

        <div>More Info</div>
      </div>

      <div className={styles.cardFooterSect}>
        Price: From {professional.price}
      </div>
    </div>
  );
}
