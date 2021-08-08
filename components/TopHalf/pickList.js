import styles from "./pickList.module.css";
import Image from "next/image";
import professionals from "../../data/professionalData";
import PickItem from "./pickItem";
export default function PickList(props) {
  return (
    <div>
      <ul className={styles.pickListGrid}>
        {professionals.map((professional, i) => (
          <PickItem
            key={i}
            professional={professional}
            stylePass={props.className}
          />
        ))}
      </ul>
    </div>
  );
}
