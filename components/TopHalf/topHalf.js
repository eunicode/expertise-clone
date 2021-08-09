import PickContainer from "./pickContainer";
import styles from "./topHalf.module.css";
import Sidebar from "./sidebar";

export default function TopHalf() {
  return (
    <div className={styles.topHalfGrid}>
      <PickContainer styleGrid={styles.pickContainerGrid} />
      <Sidebar styleGrid={styles.sidebarGrid} />
    </div>
  );
}
