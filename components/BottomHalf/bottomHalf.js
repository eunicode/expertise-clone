import styles from "./bottomHalf.module.css";
import CardList from "../Card/cardList";

export default function BottomHalf() {
  return (
    <div className={styles.bottomHalf}>
      <CardList />
    </div>
  );
}
