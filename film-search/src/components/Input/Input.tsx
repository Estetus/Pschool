import { forwardRef } from "react";
import styles from "./Input.module.css";
import cn from "classnames";
import type { InputProps } from "./Input.props";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, isValid = true, appearance, ...props },
  ref
) {
  return (
    <input
      {...props}
      ref={ref}
      className={cn(className, styles["input-search"], {
        [styles["invalid"]]: !isValid,
        [styles["logined"]]: appearance === "login",
      })}
    />
  );
});

export default Input;
