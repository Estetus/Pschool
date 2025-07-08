import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { userActions } from "../store/user.slice";
import { Layout } from "../Layout/Layout";
import MainText from "../MainText/MainText";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((s: RootState) => s.user.isLogined);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    if (!trimmedUsername) return;
    dispatch(
      userActions.loginUser({
        name: trimmedUsername,
      })
    );

    setUsername("");
  };


  return (
    <div>
      <Layout />
      <MainText text={""} title={"Вход"}></MainText>
      <form className={styles["main-text"]} onSubmit={submit}>
        <Input
          appearance="login"
          type="text"
          isValid={true}
          name="Имя пользователя"
          value={username}
          onChange={inputChange}
          placeholder="Ваше имя"
        />

        <Button text="Войти в профиль" appearance="login" />
      </form>
    </div>
  );
}

export default Login;
