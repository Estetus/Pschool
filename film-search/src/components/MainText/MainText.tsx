import Paragraph from '../Paragraph/Paragraph';
import Title from "../Title/Title";
import styles from "./MainText.module.css";
import type { MainTextProps } from "./MainText.props";

function MainText({ title, text }: MainTextProps) {
  return (
    <div className={styles["main-text"]}>
      <Title title={title} />
      <Paragraph text={text} />
    </div>
  );
}

export default MainText;
