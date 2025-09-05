import styles from "./styles.module.css"
type Props = {
    productName: string;
    imgSrc: string;
    price: string;
}

export default function ProductCard({productName, imgSrc, price}: Props) {
    return (
        <div className={styles.card}>
            <h3>{productName}</h3>
            <img src={imgSrc} alt={`Foto de um ${productName}`} />
            <span>{`Preço: R$ ${price}`}</span>
        </div>
    );
}

