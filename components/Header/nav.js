import styles from "./nav.module.css";
import categories from "../../data/navData";
import NavCat from "./navCat";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {categories.map((cat, i) => (
          <NavCat key={i} cat={cat} />
        ))}
        <li className={`${styles.navCat} ${styles.navListed}`}>Get Listed</li>
      </ul>
      <style jsx>{``}</style>
    </nav>
  );
}
