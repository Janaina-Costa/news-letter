
import style from "./page.module.css";
import iconList from "../../../public/icon-list.svg";
import Image from "next/image";
import sucessIcon from '../../../public/icon-success.svg'

import { Form } from "@/components/Form";
import { Button } from "@/components/Button";

export default function Tankyou() {
  return (
    <div className={style.container}>
      <div className={style.box} >
      <div className={style.topImage}>
        <Image src={sucessIcon} alt=""/>
      </div>
      <div className={style.wrapper}>
        <div className={style.wrapperTitle}>
          <h1>Thanks for subscribing!</h1>
        </div>
        <div className={style.wrapperSubTitle}>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <Button text="Dimiss message"/>
      </div>
      <div className={style.rightImage} ></div>
      </div>
    </div>
  );
}
