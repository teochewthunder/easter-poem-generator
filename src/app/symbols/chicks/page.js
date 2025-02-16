import Image from "next/image";
import styles from "../../page.module.css";

export default function SymbolBunny() {
  return (
    <div>
        <Image
          className={styles.symbolImage}
          src="/symbol_chicks.jpg"
          alt="Chicks"
          width={300}
          height={300}
        />
        <hr />
        <p>Chicks are another symbol of new life and rebirth, aligning with the overall themes of Easter. Just as chicks hatch from eggs, they represent the idea of life emerging from the seemingly lifeless, echoing the resurrection of Jesus. They also symbolize innocence and the start of new beginnings, adding to the joyful and hopeful atmosphere of Easter celebrations. The imagery of chicks, along with eggs and bunnies, helps to convey the sense of renewal and the promise of new life that Easter embodies.</p>
    </div>
  );
}
