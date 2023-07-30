import style from "./style.module.css";
import { Input } from "./Input";
import { Button } from "../Button";

export const Form = () => {
  return (
    <form className={style.formField}>
      <Input
        type="email"
        placeholder="email@company.com"
        label="Email address"
      />
      <Button text="Subscrible to monthly newslatter" />
    </form>
  );
};
