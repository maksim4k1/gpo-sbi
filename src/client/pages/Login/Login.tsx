"use client";
import styles from "./page.module.css";
import { type FC, useEffect, useState } from "react";
import {InputField} from "@/client/components";
import { Button } from "@/client/components";
import { useAppDispatch } from "@/client/hooks";

import { authActions, useLoginMutation } from "@/client/redux/features";

import { type LoginRequestData } from "@/shared/types/api/auth";

export const SignIn: FC = () => {
  const [form,setForm] = useState<LoginRequestData>({
    telegramId: "",
    password: "",
  })
  const dispatch = useAppDispatch();
  const [login, { data,  isSuccess }] =
    useLoginMutation();
    useEffect(() => {
      if (isSuccess) {
        dispatch(authActions.setCredentials(data));
      }
    }, [isSuccess, data, dispatch]);
  const onSubmit = async (values: LoginRequestData) => {
    login(form);
  }
  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    
    const values: LoginRequestData = form;
    onSubmit(values);
}; 
  return (
    
    <div className={styles.signin_window}>
      <h1 style = {{fontSize: "4rem"}}>Вход</h1>
      <InputField
      inputType = "text"
      value = {form.telegramId}
      handleChangeText = {(event) => setForm({ ...form, telegramId: event })}
      label = "Имя пользователя telegram"
      />
      <InputField
      inputType = "password"
      value = {form.password}
      handleChangeText = {(event) => setForm({ ...form, password: event })}
      label = "Пароль"
      />
      <Button
      title = "ВХОД"
      onClick = {handleButtonClick}
      />
  </div>
  )
};

