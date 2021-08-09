import styles from "./footerCol.module.css";

export default function Footer({ col, key }) {
  return (
    <div key={key}>
      <h4 className={styles.footerHeader}>{col.heading}</h4>
      <ul className={styles.footerColList}>
        {col.list.map((link, i) => {
          return (
            <a href={link} key={i} className={styles.footerLink}>
              {link}
            </a>
          );
        })}
      </ul>
    </div>
  );
}
