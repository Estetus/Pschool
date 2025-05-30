import type { InputHTMLAttributes } from "react";

export type InputAppearance = 'login'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid: boolean,
    appearance?: InputAppearance
}