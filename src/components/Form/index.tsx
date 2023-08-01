"use client";

import style from "./style.module.css";
import { Input } from "./Input";
import { Button } from "../Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import {  selectEmail, setEmailState } from "@/redux/features/emailSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


export const Form = () => {
  const {email} = useAppSelector(selectEmail)
  const dispatch = useAppDispatch()
  const router = useRouter()


  const formik = useFormik({
    initialValues: {
      email: email,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Valid email required")
        .required("Email required"),
    }),
    onSubmit: (values) => {
      router.push('/thankyou')
      dispatch(setEmailState(values.email));
    },
  });

  const styleFormError = {
    backgroundColor: formik.errors.email && formik.touched.email ? "#ff615520" : "",
    color: formik.errors.email && formik.touched.email ? "#FF6155" : "",
    fontWeight: formik.errors.email && formik.touched.email ? "700" : "",
    borderColor: formik.errors.email && formik.touched.email ? "#FF6155" : "",
  };

  return (
    <form className={style.formField} onSubmit={formik.handleSubmit}>
      {formik.errors.email && formik.touched.email ? (
        <span className={style.errorForm}>{formik.errors.email} </span>
      ) : (
        ""
      )}
      <Input
        id="email"
        type="text"
        placeholder="email@company.com"
        label="Email address"
        value={formik.values.email}
        onchange={formik.handleChange}
        onBlur={formik.handleBlur}
        style={styleFormError}
      />
      <Button text="Subscrible to monthly newslatter" type="submit" />
    </form>
  );
};
