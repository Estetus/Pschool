import Card from "../../components/Card/Card";
import styles from "./Body.module.css";
import { INITIAL_DATE } from "../../Mocks/Moks";
import CardList from "../../components/CardList/CardList";
import Login from "../../components/Login/Login";

function Body({onLogin}) {
  const data = INITIAL_DATE;

  

  return (
    <div className={styles["body-main"]}>
      <CardList>
        {data.length === 0 && (
          <p className={styles["initial-data"]}>
            Упс ... Ничего не найдено
            <p className={styles["initial-data_second"]}>
              Попробуйте изменить запрос или ввести более точное название фильма
            </p>
          </p>
        )}
        {data.length > 0 &&
          data.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              img={el.img}
              rating={el.rating}
              id={el.id}
            ></Card>
          ))}
      </CardList>
      <Login onLogin={onLogin} />
    </div>
  );
}

export default Body;
