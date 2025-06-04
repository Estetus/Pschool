import { useParams } from "react-router-dom";
import styles from "./Card.module.css";
import { INITIAL_DATE } from "../../Mocks/Mocks";

export function Card() {
  const { id } = useParams();

  const movie = INITIAL_DATE.find((item) => item.id === id);

  if (!movie) {
    return <div>Фильм не найден</div>;
  }
  return (
    <div className={styles["card-film"]}>
      <div className={styles["card-head"]}>
        <p className={styles["card-search"]}>Поиск фильмов</p>
        <h1 className={styles["card-title"]}> {movie.title}</h1>
      </div>
      <div className={styles["film-container"]}>
        <div className={styles["card-info"]}>
          <div className={styles["card-img"]}>
            <img src={`/${movie.img}`} alt="" />
          </div>
          <div className={styles["card-favorites"]}>
            <div className={styles["film-rating"]}>
              <img className={styles["card-icon"]} src="../star.svg" alt="" />
              <span className={styles["card-rating"]}>{movie.rating}</span>
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
        </div>
      </div>
      <p className={styles["card-search"]}>Отзывы</p>
      <div className={styles["film-desc"]}></div>
    </div>
  );
}
