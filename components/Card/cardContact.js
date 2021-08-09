import styles from "./cardContact.module.css";

export default function CardContact({ professional }) {
  // To do: extract
  const socMedGenerate = (socMedObj) => {
    const socMedArr = [];

    for (const [key, value] of Object.entries(socMedObj)) {
      socMedArr.push(
        <p>
          <a href={value} className={styles.cardLink}>
            {key}
          </a>
        </p>
      );
    }
    return socMedArr;
  };

  return (
    <div className={styles.cardTopContact}>
      <p>{professional.address}</p>
      <div className={`${styles.cardTopSocial} ${styles.utilVertCenter}`}>
        {socMedGenerate(professional.socialMedia)}
      </div>
      <p className={styles.utilVertCenter}>
        <a href="" className={styles.cardLink}>
          Leave Feedback
        </a>
      </p>

      <button className={styles.cardContactPhone}>{professional.phone}</button>
      <div className={`${styles.cardContactSite} ${styles.utilVertCenter}`}>
        <a href={professional.site}>Website</a>
      </div>
    </div>
  );
}
