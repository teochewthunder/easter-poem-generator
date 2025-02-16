import Image from "next/image";
import styles from "../../page.module.css";

export default function SymbolBunny() {
  return (
    <div>
        <div className={styles.symbolImage} style={{ backgroundImage:"url(/symbol_bunny.jpg)" }} />
        <p className={styles.symbolText} >The bunny, or Easter rabbit, is a symbol of fertility and new life, which aligns with the themes of rebirth and renewal celebrated during Easter. Originating from ancient pagan traditions, the rabbit was associated with the goddess Ēostre, who represented spring and fertility. As Christianity spread, the symbolism of the rabbit was incorporated into Easter celebrations. The Easter bunny is often depicted delivering eggs, which are also symbols of new life and rebirth, to children, adding a playful and joyful element to the holiday.</p>
    </div>
  );
}
