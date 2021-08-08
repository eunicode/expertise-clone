import PickContainer from "./pickContainer";
import styles from "./topHalf.module.css";
import Sidebar from "./sidebar";

export default function TopHalf() {
  return (
    <div className={styles.topHalfGrid}>
      {/* <div className={styles.pickContainerGrid}> */}
      <PickContainer styleGrid={styles.pickContainerGrid} />
      {/* </div> */}
      {/* <div className={styles.sidebarGrid}> */}
      <Sidebar styleGrid={styles.sidebarGrid} />
      {/* </div> */}
    </div>
  );
}
