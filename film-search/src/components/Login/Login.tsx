import React, { useContext, useEffect, useState, type ChangeEvent } from "react";
import Button from "../Button/Button";
import styles from "./Login.module.css";
import Input from "../Input/Input";
import { UserContext } from "../../context/user.context";
import { useLocalStorage } from "../hooks/user-localStorage";
import type { UserProps } from "./Login.props";

function Login() {
  const [users, setUsers] = useLocalStorage<UserProps []>("data", []);
  const [currentInput, setCurrentInput] = useState("");
  const { setLoggedUser } = useContext(UserContext);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  useEffect(() => {
    if (users && users.length > 0) {
      const user = users.find((user) => user.isLogined);
      setLoggedUser(user || null);
    }
  }, [users, setLoggedUser]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput) return;
    const newUser: UserProps = {
      name: currentInput.trim(),
      isLogined: true,
    };
    const updatedUsers = users ? users.map((user) => ({
      ...user,
      isLogined: false,
    })) : []
    setUsers([...updatedUsers, newUser]);
    setLoggedUser(newUser);
    setCurrentInput("");
  };

  return (
    <div>
      <h2 className={styles["log-title"]}>Вход</h2>
      <form className={styles["main-text"]} onSubmit={handleLogin}>
        <Input
          appearance="login"
          type="text"
          isValid = {true}
          name="Имя пользователя"
          value={currentInput}
          onChange={inputChange}
          placeholder="Ваше имя"
        />

        <Button text="Войти в профиль" appearance="login" />
      </form>
    </div>
  );
}

export default Login;
