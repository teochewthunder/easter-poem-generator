import Image from "next/image";
import styles from "../../page.module.css";

export default function SymbolBunny() {
  return (
    <div>
        <Image
          className={styles.symbolImage}
          src="/symbol_bunny.jpg"
          alt="Bunny"
          width={300}
          height={300}
          align="left"
        />
        <hr />
        <p>Lilies, particularly white lilies, hold significant symbolism in Easter celebrations. They represent purity, virtue, and the resurrection of Jesus Christ. The trumpet shape of the lily flower is said to symbolize the trumpet call of God, heralding the resurrection. Lilies are often used in Easter decorations and church services to convey a sense of hope, renewal, and new beginnings. Their association with new life and purity makes them a fitting symbol for the themes of Easter.</p>
    </div>
  );
}
