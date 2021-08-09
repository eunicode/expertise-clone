import styles from "./footer.module.css";

export default function Footer() {
  const footerData = [
    { heading: "Column1", list: ["link1", "link2", "link3", "link4"] },
    { heading: "Column2", list: ["link1", "link2", "link3", "link4", "link5"] },
    {
      heading: "Column3",
      list: ["link1", "link2", "link3", "link4", "link5", "link6"],
    },
    { heading: "Column4", list: ["link1", "link2", "link3"] },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {footerData.map((col, i) => {
          return (
            <div key={i}>
              <h4>{col.heading}</h4>
              <ul>
                {col.list.map((link, i) => {
                  return (
                    <a href={link} key={i}>
                      {link}
                    </a>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
