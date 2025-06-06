import { useLoaderData } from "react-router-dom";
import styles from "./Card.module.css";
import type { CardInProps } from "./CardIn.props";

export function Card() {
  const data = useLoaderData() as { short: CardInProps };

  if (!data.short) {
    return <div>Фильм не найден</div>;
  }
  const { ...props } = data.short;

  return (
    <div className={styles["card-film"]}>
      <div className={styles["card-head"]}>
        <p className={styles["card-search"]}>Поиск фильмов</p>
        <h1 className={styles["card-title"]}> {props.name}</h1>
      </div>
      <div className={styles["film-container"]}>
        <div className={styles["card-img"]}>
          <img src={props.image} alt="Постер фильма" />
        </div>
        <div className={styles["card-description"]}>
          <p className={styles["card-description_text"]}>{props.description}</p>
          <div className={styles["card-favorites"]}>
            <div className={styles["film-rating"]}>
              <img className={styles["card-icon"]} src="../star.svg" alt="" />
              <span className={styles["card-rating"]}>
                {props.aggregateRating?.ratingValue}
              </span>
            </div>
            <p className={styles["card-like"]}>
              <img
                className={styles["card-img_like"]}
                src="../like.svg"
                alt="В избранное"
              />
              В избранное
            </p>
          </div>
          <div className={styles["card-description_details"]}>
            <span>Тип</span>
            <p>{props["@type"]}</p>
          </div>
          <div className={styles["card-description_details"]}>
            <span>Дата выхода</span>
            <p>{props.datePublished}</p>
          </div>
          <div className={styles["card-description_details"]}>
            <span>Длительность</span>
            <p>{"мин"}</p>
          </div>
          <div className={styles["card-description_details"]}>
            <span>Жанр</span>
            <p>{props.genre.join(", ")}</p>
          </div>
        </div>
      </div>
      <p className={styles["card-search"]}>Отзывы</p>
      <div className={styles["film-desc"]}>
        <div className={styles["film-desc_title"]}>
          <p className={styles["film-desc_title__text"]}>
            {props.review?.name}
          </p>
          <p className={styles["film-desc_title__data"]}>
            {props.review?.dateCreated}
          </p>
        </div>
        {props.review?.reviewBody}
      </div>
    </div>
  );
}
