import styles from "./footer.module.css";
import FooterCol from "./footerCol";

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
          return <FooterCol col={col} key={i} />;
        })}
      </div>
    </footer>
  );
}
