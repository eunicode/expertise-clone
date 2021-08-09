import styles from "./servicesRec.module.css";

export default function ServicesRec() {
  const servicesData = [
    "Service1",
    "Service2",
    "Service3",
    "Service4",
    "Service5",
  ];

  return (
    <section className={styles.servicesRec}>
      <h2 className={styles.servicesHeader}>Other top picks in your area</h2>
      <div className={styles.servicesTileGrid}>
        {servicesData.map((service, i) => {
          return (
            <a href="" className={styles.servicesTile} key={i}>
              {service}
            </a>
          );
        })}
      </div>
    </section>
  );
}
