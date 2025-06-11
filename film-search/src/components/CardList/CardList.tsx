import Card from '../Card/Card';
import styles from "./CardList.module.css";
import type { CardListProps } from "./CardList.props";

function CardList({ films }: CardListProps) {
  return <div className={styles["card-list"]}>
    {films.map(f=> (
      <Card 
      key={f['#IMDB_ID']}
      title={f['#TITLE']} 
      rating={f['#RANK']} 
      img={f['#IMG_POSTER']} 
      id={f['#IMDB_ID']}/>
    ))}


    </div>;
}

export default CardList;
