import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src="/images/award-inverse.png"
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

// src="https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_85/w_830,c_scale/remote_media/award-inverse.svg"
