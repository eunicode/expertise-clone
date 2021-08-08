import styles from "./cardList.module.css";
import professionals from "../../data/professionalData";
import CardTop from "./cardTop";
import CardFooter from "./cardFooter";

export default function CardList() {
  return (
    <section className={styles.cardList}>
      {professionals.map((professional, i) => {
        return (
          <div className={styles.card}>
            <CardTop professional={professional} key={i} />
            <CardFooter professional={professional} key={i} />
          </div>
        );
      })}
    </section>
  );
}
