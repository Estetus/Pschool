import styles from "./Paragraph.module.css";
import type { ParapgraphProps } from "./Paragraph.props";

function Paragraph({ text }: ParapgraphProps) {
  return (
    <>
      <p className={styles["paragrapgh-main"]}>{text}</p>
    </>
  );
}

export default Paragraph;
