import styles from "./pickItem.module.css";
import Image from "next/image";

export default function PickItem(props) {
  return (
    <div className={styles.pickItem}>
      <Image
        src={props.professional.logo}
        width={50}
        height={50}
        alt={props.professional.name}
        className={styles.pickItemImg}
      />
      <li className={styles.pickItemName} key={props.key}>
        {props.professional.name}
      </li>
    </div>
  );
}
