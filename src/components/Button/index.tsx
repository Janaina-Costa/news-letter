import { ButtonHTMLAttributes } from "react";
import style from "./style.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, onClick, type }: IProps) => {
  return (
    <button type={type} className={style.btn}>
      {text}
    </button>
  );
};
