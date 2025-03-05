import Image from "next/image";
import styles from "../../page.module.css";

export default function SymbolBunny() {
  return (
    <div className={styles.symbolImage} >
        <Image src="/symbol_eggs.jpg" alt="eggs" width={ 300 } height={ 300 } />
        <p className={styles.symbolText} >Eggs are a rich and multifaceted symbol in Easter traditions. They embody the themes of new life, rebirth, and resurrection, which are central to the celebration of Easter. They represent the emergence of new life from within, mirroring the resurrection of Jesus from the tomb. Just as a chick hatches from an egg, the concept of rebirth is symbolized, signifying the idea of starting anew. Historically, eggs have been seen as symbols of fertility and renewal, aligning with the arrival of spring. The egg, appearing lifeless on the outside but containing life within, represents transformation and the miracle of life. Eggs are often decorated and used in Easter egg hunts, making them a playful and engaging way to celebrate the holiday while reflecting on its deeper meanings.</p>
    </div>
  );
}
