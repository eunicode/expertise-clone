import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      {/* <h1>Expertise</h1> */}
      <Image
        src="https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_85/w_830,c_scale/remote_media/award-inverse.sv-g"
        width={350}
        height={280}
        alt="Expertise logo"
        layout="intrinsic"
        className={styles.bannerImage}
      />
      <div className={styles.bannerText}>Best [professionals] in [city]</div>
    </div>
  );
}

// width={350}
// height={280}
