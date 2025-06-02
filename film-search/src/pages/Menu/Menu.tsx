import Card from "../../components/Card/Card";
import CardList from "../../components/CardList/CardList";
import MainText from "../../components/MainText/MainText";
import Search from "../../components/Search/Search";
import { INITIAL_DATE } from "../../Mocks/Mocks";
import styles from "./Menu.module.css";

export function Menu() {
  const data = INITIAL_DATE;

  return (
    <div className={styles["body-main"]}>
      <MainText
        title={"Поиск"}
        text={
          "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
        }
      />
      <Search />
      <CardList>
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
    </div>
  );
}
