import Image from "next/image";
import styles from "../../page.module.css";

export default function SymbolPage({ params }) {
  const texts = {
  	"bunny": "The bunny, or Easter rabbit, is a symbol of fertility and new life, which aligns with the themes of rebirth and renewal celebrated during Easter. Originating from ancient pagan traditions, the rabbit was associated with the goddess Ēostre, who represented spring and fertility. As Christianity spread, the symbolism of the rabbit was incorporated into Easter celebrations. The Easter bunny is often depicted delivering eggs, which are also symbols of new life and rebirth, to children, adding a playful and joyful element to the holiday.",
  	"chicks": "Chicks are another symbol of new life and rebirth, aligning with the overall themes of Easter. Just as chicks hatch from eggs, they represent the idea of life emerging from the seemingly lifeless, echoing the resurrection of Jesus. They also symbolize innocence and the start of new beginnings, adding to the joyful and hopeful atmosphere of Easter celebrations. The imagery of chicks, along with eggs and bunnies, helps to convey the sense of renewal and the promise of new life that Easter embodies.",
  	"cross": "The crucifix is a powerful symbol in Christianity, especially during Easter. It represents the crucifixion of Jesus Christ, an event central to Christian belief. It signifies the ultimate sacrifice Jesus made by dying on the cross to atone for humanity's sins. It also symbolizes the immense suffering Jesus endured during the crucifixion. The crucifix serves as a reminder of the redemption and salvation offered through Jesus' sacrifice. Easter celebrates Jesus' resurrection, signifying victory over death and the promise of eternal life for believers. This powerful imagery serves as a reminder of Jesus' love and the hope that comes with his resurrection, making the crucifix an integral part of Easter celebrations.",
  	"eggs": "Eggs are a rich and multifaceted symbol in Easter traditions. They embody the themes of new life, rebirth, and resurrection, which are central to the celebration of Easter. They represent the emergence of new life from within, mirroring the resurrection of Jesus from the tomb. Just as a chick hatches from an egg, the concept of rebirth is symbolized, signifying the idea of starting anew. Historically, eggs have been seen as symbols of fertility and renewal, aligning with the arrival of spring. The egg, appearing lifeless on the outside but containing life within, represents transformation and the miracle of life. Eggs are often decorated and used in Easter egg hunts, making them a playful and engaging way to celebrate the holiday while reflecting on its deeper meanings.",
  	"lillies": "Lilies, particularly white lilies, hold significant symbolism in Easter celebrations. They represent purity, virtue, and the resurrection of Jesus Christ. The trumpet shape of the lily flower is said to symbolize the trumpet call of God, heralding the resurrection. Lilies are often used in Easter decorations and church services to convey a sense of hope, renewal, and new beginnings. Their association with new life and purity makes them a fitting symbol for the themes of Easter."
  };

  return (
    <div className={ styles.symbolImage } >
        <Image src={ "/symbol_" + params.symbolName + ".jpg" } alt={ params.symbolName } width={ 300 } height={ 300 } />
        <p className={styles.symbolText} >{ texts[params.symbolName] }</p>
    </div>
  );
}