import styles from "./Card.module.css";
import type { CardProps } from "./Card.props";

function Card({ title, img, rating }:CardProps) {
  return (
    <div className={styles["card-film"]}>
      <img className={styles["card-img"]} src={img} alt="Постер" />
      <p className={styles["card-title"]}>{title}</p>
      <span className={styles["card-rating"]}>
        <img className={styles["card-icon"]} src="./star.svg" alt="" />
        {rating}
      </span>
      <p className={styles["card-like"]}>
        <img className={styles["card-img_like"]} src="./like.svg" alt="" />В
        избранное
      </p>
    </div>
  );
}

export default Card;
