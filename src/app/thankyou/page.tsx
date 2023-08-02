"use client";

import style from "./page.module.css";
import Image from "next/image";
import successIcon from '../../../public/icon-success.svg'
import { Button } from "@/components/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { reset, selectEmail } from "@/redux/features/emailSlice";
import { useRouter } from "next/navigation";
import { memo, useCallback, useEffect } from "react";

function Thankyou() {
  const {email} = useAppSelector(selectEmail)
  const dispatch = useAppDispatch()
  const router = useRouter()

  
  const handleClick =useCallback(()=>{
    dispatch(reset())
    router.back()
  },[dispatch, router])

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
                <span> {email}</span>. Please open it and
                click the button inside to confirm your
                subscription
              </p>
            </div>
          <div className={style.btn}>
          <Button text="Dismiss message" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Thankyou)