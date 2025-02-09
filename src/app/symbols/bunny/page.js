import Image from "next/image";
import styles from "../../page.module.css";

export default function Home() {
  return (
    <div>
        <Image
          className="{styles.symbolImage}"
          src={null}
          alt="Bunny"
          align="left"
        />

        <p>Lorem isum isco trunelu fir esta gui norlio mis ut wroiltillo.</p>
    </div>
  );
}
