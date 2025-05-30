import SelectUser from "../../components/SelectUser/SelectUser";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles["header"]}>
      <img className={styles["header-logo"]} src="./logo.svg" alt="Логотип" />
      <ul className={styles["header-nav"]}>
        <li className={styles["header-nav__item"]}>Поиск фильмов</li>
        <li className={styles["header-nav__item"]}>Мои фильмы</li>
        <SelectUser  />
      </ul>
    </div>
  );
}

export default Header;
