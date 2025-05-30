import styles from "./Paragraph.module.css";
import type { ParagraphPops } from "./Paragraph.props";

function Paragraph({ text }: ParagraphPops) {
  return (
    <>
      <p className={styles["paragrapgh-main"]}>{text}</p>
    </>
  );
}

export default Paragraph;
