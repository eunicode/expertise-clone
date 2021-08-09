import styles from "./bottomHalf.module.css";
import CardList from "../Card/cardList";
import ServicesRec from "./servicesRec";

export default function BottomHalf() {
  return (
    <div className={styles.bottomHalf}>
      <CardList />
      <ServicesRec />
    </div>
  );
}
