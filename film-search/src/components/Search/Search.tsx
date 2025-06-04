import { useState, type ChangeEvent } from "react";
import Button from "../Button/Button";
import styles from "./Search.module.css";
import Input from "../Input/Input";


function Search() {
  const [inputData, setInputData] = useState("");

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const seacrhItem = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    setInputData("");
    console.log(formProps);
  };

  return (
    
    <form className={styles["main-text"]} onSubmit={seacrhItem}>
      <img src="./Left Icon.svg" className={styles["form-loupe"]} />
      <Input
        type="text"
        isValid={true}
        name="Название фильма"
        value={inputData}
        onChange={inputChange}
        placeholder="Введите название"
      />

      <Button  text="Искать" />
    </form>
  );
}

export default Search;
