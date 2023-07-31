import { HTMLAttributes } from "react";
import styles from "./style.module.css";

interface IProps extends HTMLAttributes<HTMLInputElement> {
  value?: string;
  type: "text" | "submit" | "email";
  label?: string;
  onchange: (e: any) => void;
  
}

export const Input = ({
  type,
  value,
  placeholder,
  label,
  onchange,
  id,
  style
}: IProps) => {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={styles.field}
        onChange={onchange}
        id={id}
        style={style}
      />
    </>
  );
};
