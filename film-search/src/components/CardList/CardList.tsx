import styles from "./CardList.module.css";
import type { CardListProps } from "./CardList.props";

function CardList({ children }:CardListProps) {
  return <div className={styles["card-list"]}>{children}</div>;
}

export default CardList;
