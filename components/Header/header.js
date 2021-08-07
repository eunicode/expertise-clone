import Navigation from "./nav";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerName}>EXPERTISE</h1>
      <Navigation />
    </header>
  );
}
