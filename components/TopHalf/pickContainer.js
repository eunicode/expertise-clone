import styles from "./pickContainer.module.css";
import Image from "next/image";
import plumbing from "../../public/images/plumbing-unsplash.jpg";
import PickList from "./pickList";

export default function PickContainer(props) {
  return (
    <section className={`${styles.pickContainer} ${props.styleGrid}`}>
      <h2 className={styles.pickContainerHeader}>
        We scored [x number] of [professionals] in [city], [state] and picked
        the top 15
      </h2>
      <Image
        src={plumbing}
        width={640}
        height={427}
        alt="plumbing"
        layout="responsive"
        className={styles.pickContainerImg}
      />
      <section className={styles.pickContainerPicks}>
        <h2>Here are the Picks:</h2>
        <PickList />
      </section>
    </section>
  );
}
