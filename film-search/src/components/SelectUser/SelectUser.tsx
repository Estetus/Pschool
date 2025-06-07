import { useContext } from "react";
import styles from "./SelectUser.module.css";
import { UserContext } from "../../context/user.context";
import { useLocalStorage } from "../hooks/user-localStorage";
import type { UserProps } from "../Login/Login.props";
import { NavLink, useNavigate } from "react-router-dom";
import cn from "classnames";

function SelectUser() {
  const [users, setUsers] = useLocalStorage<UserProps[]>("data", []);
  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const updatedUsers = users.map((user) => ({ ...user, isLogined: false }));
    setUsers(updatedUsers);
    navigate("/login");
    setLoggedUser(null);
  };

  return (
    <>
      {loggedUser ? (
        <>
          <li className={styles["header-nav__item"]}>{loggedUser.name}</li>
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
