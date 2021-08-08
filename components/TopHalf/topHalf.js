import PickContainer from "./pickContainer";
import styles from "./topHalf.module.css";
import Sidebar from "./sidebar";

export default function TopHalf() {
  return (
    <div className={styles.topHalfGrid}>
      <div className={styles.pickContainerGrid}>
        <PickContainer />
      </div>
      <div className={styles.sidebarGrid}>
        <Sidebar />
      </div>
    </div>
  );
}
