import { useState } from "react";
import CardList from "../../components/CardList/CardList";
import MainText from "../../components/MainText/MainText";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";
import type { Film } from "../../interfaces/film.interface";
import axios, { AxiosError } from "axios";
import { URL } from "../../components/helpers/API";

export function Menu() {
  const [inputData, setInputData] = useState("");
  const [films, setFilms] = useState<Film[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const inputChange = (value: string) => {
    setInputData(value);
    if (error) {
      setError(undefined);
    }
  };

  const seacrhFilm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!inputData.trim()) {
        setError("Введите название фильма");
        return;
      }
      setIsLoading(true);
      setError(undefined);
      const { data } = await axios.get<{ description: Film[] }>(
        `${URL}/?q=${inputData}`
      );
      if (!data.description || data.description.length === 0) {
        setError("Ничего не найдено");
        setFilms([]);
        setIsLoading(false);
      } else {
        setFilms(data.description);
        setInputData("");
        setIsLoading(false);
        setError(undefined);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response) {
          setError("Ошибка сервера. Попробуйте позже.");
        } else {
          setError("Ошибка соединения. Проверьте интернет.");
        }
      }
      setIsLoading(false);
      return;
    }
  };

  return (
    <div className={styles["body-main"]}>
      <MainText
        title={"Поиск"}
        text={
          "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
        }
      />
      <div className={styles["errorContent"]}>
        <Search
          inputData={inputData}
          setInputData={inputChange}
          seacrhFilm={seacrhFilm}
        />
        <div
          className={`${styles["errorMessage"]} ${error ? styles["show"] : ""}`}
        >
          {error}
        </div>
      </div>

      {!isLoading && <CardList films={films} />}
      {isLoading && <p>Загрузка данных ...</p>}
    </div>
  );
}
