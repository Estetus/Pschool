import styles from "./SelectUser.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import cn from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { userActions } from '../store/user.slice';

function SelectUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {name, isLogined} = useSelector((s: RootState) => s.user)

  const handleLogout = () => {
    dispatch(userActions.logoutUser())
    navigate("/login");
  };

  return (
    <>
      {isLogined ? (
        <>
          <li className={styles["header-nav__item"]}>{name}</li>
          <img
            className={styles["header-logo"]}
            src="../User.svg"
            alt="Пользователь"
          />
          <li className={styles["header-nav__item"]} onClick={handleLogout}>
            Выйти
          </li>
        </>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            cn(styles["header-nav__item"], {
              [styles.active]: isActive,
            })
          }
        >
          Войти
          <img
            src="../Login.svg"
            alt="Логотип"
            className={styles["login-icon"]}
          />
        </NavLink>
      )}
    </>
  );
}

export default SelectUser;
