import { useContext } from "react";
import styles from "./SelectUser.module.css";
import { UserContext } from "../../context/user.context";
import { useLocalStorage } from "../hooks/user-localStorage";
import type { UserProps } from "../Login/Login.props";

function SelectUser() {
  const [users, setUsers] = useLocalStorage<UserProps []>("data", []);
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  const handleLogout = () => {
    const updatedUsers = users.map((user) => ({ ...user, isLogined: false }));
    setUsers(updatedUsers);
    setLoggedUser(null);
  };

  return (
    <>
      {loggedUser ? (
        <>
          <li className={styles["header-nav__item"]}>{loggedUser.name}</li>
          <img
            className={styles["header-logo"]}
            src="./User.svg"
            alt="Пользователь"
          />
          <li className={styles["header-nav__item"]} onClick={handleLogout}>
            Выйти
          </li>
        </>
      ) : (
        <li className={styles["header-nav__item"]}>
          Войти
          <img
            className={styles["header-nav-item__img"]}
            src="./Login.svg"
            alt="Логотип"
          />
        </li>
      )}
    </>
  );
}

export default SelectUser;
