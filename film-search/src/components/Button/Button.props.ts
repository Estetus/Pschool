import type { ButtonHTMLAttributes } from "react";

export type ButtonAppearance = 'login' ;


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
text: string,
appearance?: ButtonAppearance
}