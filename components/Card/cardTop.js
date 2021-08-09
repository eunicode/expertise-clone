import styles from "./cardTop.module.css";
import Image from "next/image";
import CardContact from "./cardContact";
import CardTag from "./cardTag";

export default function CardTop({ professional }) {
  return (
    <div className={styles.cardTop}>
      <Image src={professional.logo} width={500} height={500} />
      <div className={styles.cardTopRight}>
        <h3>{professional.name}</h3>

        <CardTag professional={professional} />

        <p>{professional.description}</p>
        <CardContact professional={professional} />
      </div>
    </div>
  );
}

// layout = "responsive";
