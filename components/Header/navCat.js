import styles from "./navCat.module.css";

export default function NavCat(props) {
  return (
    <li className={styles.navCat}>
      <a className={styles.navCatLink} href={props.cat.link}>
        {props.cat.cat}
      </a>
    </li>
  );
}
