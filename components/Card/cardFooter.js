import styles from "./cardFooter.module.css";
import { useState, useEffect } from "react";

export default function CardFooter({ professional }) {
  const [show, setShow] = useState(false);

  const onClick = (e) => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className={styles.cardFooter}>
      <div className={styles.cardFooterSect} onClick={onClick}>
        <div>Reputation: {professional.reputation}</div>
        <div className={styles.cardFooterTextSmall}>More Info</div>
      </div>

      <div className={styles.cardFooterSect}>
        <div>Professionalism: {professional.professionalism}</div>

        <div className={styles.cardFooterTextSmall}>More Info</div>
      </div>

      <div className={styles.cardFooterSect}>
        Price: From {professional.price}
      </div>
      {show && <div>{professional.reputationMoreInfo.info}</div>}
    </div>
  );
}
