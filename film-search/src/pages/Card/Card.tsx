import { useNavigate, useParams } from "react-router-dom";
import styles from "./Card.module.css";
import { useEffect, type MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../components/store/store";
import {
  cardActions,
  fetchMovieDetails,
} from "../../components/store/card.slice";

export function Card() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { currentMovie, loading, error } = useSelector((s: RootState) => s.card);

  const currentUsername = useSelector((state: RootState) => state.user.name);
  const isFavorite = useSelector((state: RootState) => {
    if (!currentUsername) return false;
    return state.card.favorites[currentUsername]?.some(
      (item) => item.id === id
    );
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }
  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }
  if (!currentMovie) {
    return <div className={styles.error}>Фильм не найден</div>;
  }

  function parsetoMinute(duration: string): string {
    if (!duration) {
      return "Не указано";
    }
    const matches = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    if (!matches) return "Не указано";
    const hour = matches[1] ? parseInt(matches[1]) : 0;
    const minutes = matches[2] ? parseInt(matches[2]) : 0;
    const total = hour * 60 + minutes;
    return `${total} мин`;
  }

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
        cardActions.remove({ username: currentUsername, itemId: id as string })
      );
    } else {
      dispatch(
        cardActions.add({
          username: currentUsername,
          item: {
            id: id as string,
            title: currentMovie.name,
            rating: currentMovie.aggregateRating?.ratingValue || 0,
            img: currentMovie.image,
            count: 1,
          },
        })
      );
    }
  };

  return (
    <div className={styles["card-film"]}>
      <div className={styles["card-head"]}>
        <p className={styles["card-search"]}>Поиск фильмов</p>
        <h1 className={styles["card-title"]}> {currentMovie.name}</h1>
      </div>
      <div className={styles["film-container"]}>
        <div className={styles["card-img"]}>
          <img src={currentMovie.image} alt="Постер фильма" />
        </div>
        <div className={styles["card-description"]}>
          <p className={styles["card-description_text"]}>
            {currentMovie.description}
          </p>
          <div className={styles["card-favorites"]}>
            <div className={styles["film-rating"]}>
              <img className={styles["card-icon"]} src="../star.svg" alt="" />
              <span className={styles["card-rating"]}>
                {currentMovie.aggregateRating?.ratingValue}
              </span>
            </div>
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
          <div className={styles["card-description_details"]}>
            <span>Тип</span>
            <p>{currentMovie["@type"]}</p>
          </div>
          <div className={styles["card-description_details"]}>
            <span>Дата выхода</span>
            <p>{currentMovie.datePublished}</p>
          </div>
          <div className={styles["card-description_details"]}>
            <span>Длительность</span>
            <p>{parsetoMinute(currentMovie.duration)}</p>
          </div>
          <div className={styles["card-description_details"]}>
            <span>Жанр</span>
            <p>{currentMovie.genre?.join(", ") || "Не указано"}</p>
          </div>
        </div>
      </div>
      <p className={styles["card-search"]}>Отзывы</p>
      <div className={styles["film-desc"]}>
        <div className={styles["film-desc_title"]}>
          <p className={styles["film-desc_title__text"]}>
            {currentMovie.review?.name}
          </p>
          <p className={styles["film-desc_title__data"]}>
            {currentMovie.review?.dateCreated}
          </p>
        </div>
        {currentMovie.review?.reviewBody}
      </div>
    </div>
  );
}
