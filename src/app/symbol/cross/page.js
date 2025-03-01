import Image from "next/image";
import styles from "../../page.module.css";

export default function SymbolBunny() {
  return (
    <div className={styles.symbolImage} >
        <Image src="/symbol_cross.jpg" alt="cross" width={ 300 } height={ 300 } />
        <p className={styles.symbolText} >The crucifix is a powerful symbol in Christianity, especially during Easter. It represents the crucifixion of Jesus Christ, an event central to Christian belief. It signifies the ultimate sacrifice Jesus made by dying on the cross to atone for humanity's sins. It also symbolizes the immense suffering Jesus endured during the crucifixion. The crucifix serves as a reminder of the redemption and salvation offered through Jesus' sacrifice. Easter celebrates Jesus' resurrection, signifying victory over death and the promise of eternal life for believers. This powerful imagery serves as a reminder of Jesus' love and the hope that comes with his resurrection, making the crucifix an integral part of Easter celebrations.</p>
    </div>
  );
}
