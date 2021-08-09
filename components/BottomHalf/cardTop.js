import styles from "./cardTop.module.css";
import Image from "next/image";

export default function CardTop(props) {
  const socMedGenerate = (socMedObj) => {
    const socMedArr = [];
    for (const [key, value] of Object.entries(socMedObj)) {
      socMedArr.push(
        <p>
          <a href={value} className={styles.link}>
            {key}
          </a>
        </p>
      );
    }
    return socMedArr;
  };
  return (
    <div className={styles.cardTop}>
      <Image src={props.professional.logo} width={500} height={500} />
      <div className={styles.cardTopRight}>
        <h3>{props.professional.name}</h3>
        <div className={styles.cardTopTagCont}>
          {props.professional.tags.map((tag, i) => {
            return (
              <div key={i} className={styles.cardTopTag}>
                {tag}
              </div>
            );
          })}
        </div>

        <p>{props.professional.description}</p>
        <div className={styles.cardTopContact}>
          <p>{props.professional.address}</p>
          <div className={styles.cardTopSocial}>
            {socMedGenerate(props.professional.socialMedia)}
          </div>
          <p>
            <a href="" className={styles.link}>
              Leave Feedback
            </a>
          </p>
          {/* <div className={styles.cardTopContactFooter}> */}
          <button className={styles.button}>{props.professional.phone}</button>
          <div className={styles.linkSite}>
            <a href={props.professional.site}>Website</a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

// layout = "responsive";
