import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.props";

function Card(props: CardProps) {
  return (
    <Link to={`/movie/${props.id}`} className={styles["card-link"]}>
      <div className={styles["card-film"]}>
        <img className={styles["card-img"]} src={props.img} alt="Постер" />
        <p className={styles["card-title"]}>{props.title}</p>
        <span className={styles["card-rating"]}>
          <img className={styles["card-icon"]} src="./star.svg" alt="" />
          {props.rating}
        </span>
        <p className={styles["card-like"]}>
          <img className={styles["card-img_like"]} src="./like.svg" alt="" />В
          избранное
        </p>
      </div>
    </Link>
  );
}

export default Card;
