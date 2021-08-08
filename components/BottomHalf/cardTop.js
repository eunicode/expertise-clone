import styles from "./cardTop.module.css";
import Image from "next/image";

export default function CardTop(props) {
  return (
    <div className={styles.cardTop}>
      <Image src={props.professional.logo} width={400} height={400} />
      <div>
        <h3>{props.professional.name}</h3>
        <div className={styles.cardTopTagCont}>
          {props.professional.tags.map((tag, i) => {
            return (
              <div key={i} className={styles.cardTopTag}>
                {tag}
              </div>
            );
          })}
        </div>

        <p>{props.professional.description}</p>
        <p>{props.professional.address}</p>
        <p>{props.professional.phone}</p>
      </div>
    </div>
  );
}

// layout = "responsive";
