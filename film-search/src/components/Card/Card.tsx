import { Link, useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.props";
import type { MouseEvent } from "react";
import { cardActions } from "../store/card.slice";
import type { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

function Card(props: CardProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const currentUsername = useSelector((state: RootState) => state.user.name);
  const isFavorite = useSelector((state: RootState) => {
    if (!currentUsername) return false;
    const userFavorites = state.card.favorites[currentUsername] || [];
    return userFavorites.some((item) => item.id === props.id);
  });

  const toggleFavorite = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!currentUsername) {
      alert("Пожалуйста, войдите в систему чтобы добавлять фильмы в избранное");
      navigate("/login");
      return;
    }

    if (isFavorite) {
      dispatch(
        cardActions.remove({
          username: currentUsername,
          itemId: props.id,
        })
      );
    } else {
      dispatch(
        cardActions.add({
          username: currentUsername,
          item: {
            id: props.id,
            title: props.title,
            rating: props.rating,
            img: props.img,
            count: 1,
          },
        })
      );
      console.log(props.id);
    }
  };

  return (
    <Link to={`/movie/${props.id}`} className={styles["card-link"]}>
      <div className={styles["card-film"]}>
        <img className={styles["card-img"]} src={props.img} alt="Постер" />
        <div className={styles["card-film-bottom"]}>
          <p className={styles["card-title"]}>{props.title}</p>
          <button
            className={styles["card-like"]}
            onClick={toggleFavorite}
            aria-label={
              isFavorite ? "Удалить из избранного" : "Добавить в избранное"
            }
          >
            <img
              className={styles["card-img_like"]}
              src={isFavorite ? "/Bookmark.svg" : "/like.svg"}
              alt={isFavorite ? "В избранном" : "Добавить в избранное"}
            />
            {isFavorite ? "В избранном" : "В избранное"}
          </button>
        </div>
        <span className={styles["card-rating"]}>
          <img className={styles["card-icon"]} src="/star.svg" alt="Рейтинг" />
          {props.rating}
        </span>
      </div>
    </Link>
  );
}

export default Card;
