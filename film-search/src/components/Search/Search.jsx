import { useState, useRef } from "react";
import Button from "../Button/Button";
import styles from "./Search.module.css";
import Input from "../Input/Input";


function Search() {
  const [inputData, setInputData] = useState("");
  const searchRef = useRef();
  const buttonRef = useRef();

  const inputChange = (e) => {
    setInputData(e.target.value);
  };

  const seacrhItem = (e) => {
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
        ref={searchRef}
        type="text"
        name="Название фильма"
        value={inputData}
        onChange={inputChange}
        placeholder="Введите название"
      />

      <Button ref={buttonRef} text="Искать" />
    </form>
  );
}

export default Search;
