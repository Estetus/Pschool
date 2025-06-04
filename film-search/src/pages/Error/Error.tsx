import MainText from '../../components/MainText/MainText';
import Search from '../../components/Search/Search';
import styles from "./Error.module.css";

export function Error () {
  return (
    <div>
      <MainText
        text={
          "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
        }
        title={"Поиск"}
      ></MainText>
      <Search />
      <div className={styles["error-text"]}>
        <p className={styles["initial-data"]}>Упс ... Ничего не найдено</p>
        <p className={styles["initial-data_second"]}>
          Попробуйте изменить запрос или ввести более точное название фильма
        </p>
      </div>
    </div>
  );
}