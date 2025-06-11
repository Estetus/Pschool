import { type ChangeEvent } from "react";
import Button from "../Button/Button";
import styles from "./Search.module.css";
import Input from "../Input/Input";
import type { SearchProps } from './Search.props';


function Search({ inputData, setInputData, seacrhFilm }: SearchProps) {
  
  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <form className={styles["main-text"]} onSubmit={seacrhFilm}>
      <img src="./Left Icon.svg" className={styles["form-loupe"]} />
      <Input
        type="text"
        isValid={true}
        name="Название фильма"
        value={inputData}
        onChange={inputChange}
        placeholder="Введите название"
      />

      <Button text="Искать" />
    </form>
  );
}

export default Search;
