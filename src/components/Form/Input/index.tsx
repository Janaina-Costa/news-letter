import { HTMLAttributes } from "react";
import style from "./style.module.css";

interface IProps extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  type: "text" | "submit" | "email";
  label?: string;
}

export const Input = ({
  type,
  value,
  placeholder,
  label,
 
}: IProps) => {
  return (
    <>
      <label className={style.label}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={(style.field)}
       
      />
    </>
  );
};
