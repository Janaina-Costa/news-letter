
import style from "./page.module.css";
import Image from "next/image";
import successIcon from '../../../public/icon-success.svg'
import { Button } from "@/components/Button";

export default function Thankyou() {
  return (
    <div className={style.container}>
      <div className={style.box} >
        <div className={style.wrapper}>
            <div className={style.topImage}>
              <Image src={successIcon} alt="" />
            </div>
            <div className={style.wrapperTitle}>
              <h1>Thanks for subscribing!</h1>
            </div>
            <div className={style.wrapperSubTitle}>
              <p>
                A confirmation email has been sent to
                <span> ash@company.com</span>. Please open it and
                click the button inside to confirm your
                subscription
              </p>
            </div>
          <div className={style.btn}>
          <Button text="Dismiss message" />
          </div>
        </div>
      </div>
    </div>
  );
}
