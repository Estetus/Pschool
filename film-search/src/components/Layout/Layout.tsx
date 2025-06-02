import { NavLink, Outlet } from "react-router-dom";
import SelectUser from "../SelectUser/SelectUser";
import styles from "./Layout.module.css";
import cn from "classnames";

export function Layout() {
  return (
    <div className={styles["content"]}>
      <div className={styles["header"]}>
        <img
          className={styles["header-logo"]}
          src="../logo.svg"
          alt="Логотип"
        />
        <ul className={styles["header-nav"]}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(styles["header-nav__item"], {
                [styles.active]: isActive,
              })
            }
          >
            Поиск фильмов
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              cn(styles["header-nav__item"], {
                [styles.active]: isActive,
              })
            }
          >
            Мои фильмы
          </NavLink>
          <SelectUser />
        </ul>
      </div>
      <div className={styles["body-main"]}>
        <Outlet />
      </div>
    </div>
  );
}
