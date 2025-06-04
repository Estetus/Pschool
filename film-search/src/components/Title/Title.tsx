import styles from "./Title.module.css";
import type { TitleProps } from "./Title.props";

function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className={styles["title-search"]}>{title}</h1>
    </>
  );
}

export default Title;
