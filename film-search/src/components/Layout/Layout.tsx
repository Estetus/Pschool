import { NavLink, Outlet } from "react-router-dom";
import SelectUser from "../SelectUser/SelectUser";
import styles from "./Layout.module.css";
import cn from "classnames";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export function Layout() {
  const currentUser = useSelector((s: RootState) => s.user.name);
  const userFavorites = useSelector((s: RootState) =>
    currentUser ? s.card.favorites[currentUser] || [] : []
  );
  const totalCount = userFavorites.reduce((acc, item) => acc + item.count, 0);

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
          {totalCount > 0 && (
            <div className={styles["favorites-count"]}>{totalCount}</div>
          )}
          <SelectUser />
        </ul>
      </div>
      <div className={styles["body-main"]}>
        <Outlet />
      </div>
    </div>
  );
}
