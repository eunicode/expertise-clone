import styles from "./cardFooter.module.css";

export default function CardFooter(props) {
  return (
    <div className={styles.cardFooter}>
      <div className={styles.cardFooterSect}>
        <div>Reputation: {props.professional.reputation}</div>
        <div>More Info</div>
      </div>

      <div className={styles.cardFooterSect}>
        <div>Professionalism: {props.professional.professionalism}</div>

        <div className={styles.cardFooterSect}>More Info</div>
      </div>

      <div>Price: From {props.professional.price}</div>
    </div>
  );
}
