import { useSelector } from "react-redux";
import MainText from "../../components/MainText/MainText";
import styles from "./Favorites.module.css";
import type { RootState } from "../../components/store/store";
import Card from "../../components/Card/Card";

export function Favorites() {
  const currentUsername = useSelector((s: RootState) => s.user.name);

  const favoriteItems = useSelector((state: RootState) => {
    if (!currentUsername) return [];
    return state.card.favorites[currentUsername] || [];
  });

  return (
    <div className={styles["favorites"]}>
      <MainText title={"Избранное"} text={""} />
      {favoriteItems.length > 0 ? (
        <div className={styles["favorites-list"]}>
          {favoriteItems.map((film) => (
            <Card
              key={film.id}
              id={film.id}
              title={film.title}
              rating={film.rating}
              img={film.img}
            />
          ))}
        </div>
      ) : (
        <p className={styles["empty-message"]}>
          {currentUsername
            ? "Добавьте фильмы в избранное"
            : "Войдите в систему, чтобы добавить избранное"}
        </p>
      )}
    </div>
  );
}
