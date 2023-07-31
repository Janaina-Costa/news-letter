"use client";

import style from "./style.module.css";
import { Input } from "./Input";
import { Button } from "../Button";
import { ChangeEvent, useState } from "react";

interface IFormValues{
  email: string;
}

export const Form = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value)      
  };

  return (
    <form className={style.formField}>
      <Input
        type="email"
        placeholder="email@company.com"
        label="Email address"
        value={email}
        onchange={handleChange}
        
        
      />
      <Button text="Subscrible to monthly newslatter" type="submit" />
    </form>
  );
};
