"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextInput, Button } from "@mantine/core";
import { signup } from "./action";
import { signup_with_email } from "./action_email";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const schema = yup
  .object({
    user_email: yup.string().email().required("Email is Required"),
    user_password: yup
      .string()
      .required("Password is Required")
      .min(8, "Password is too short"),
    user_confirmpassword: yup
      .string()
      .required("Confirm Password is reuired.")
      .min(8, "Password is too short")
      .oneOf([yup.ref("user_password")], "Password must match"),
    user_firstname: yup.string().required("First Name is required"),
    user_lastname: yup.string().required("Last Name is required"),
  })
  .required();

export type UserData = yup.InferType<typeof schema>;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });
  const searchParams = useSearchParams();
  const search = searchParams?.get("message");
  const [message, setMessage] = useState("");
  const onSubmit = async (data: UserData) => {
    const resultFetch = await signup(data);
    await signup_with_email(data);

    if (resultFetch?.isSuccess) {
      setMessage(resultFetch?.message);
    }

    console.log(resultFetch);
  };

  return (
    <>
      {message}
      {search}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput label="Email Address: " {...register("user_email")} />
        <p>{errors.user_email?.message}</p>
        <TextInput label="Password" {...register("user_password")} />
        <p>{errors.user_password?.message}</p>
        <TextInput
          label="Confirm Password"
          {...register("user_confirmpassword")}
        />
        <p>{errors.user_confirmpassword?.message}</p>
        <TextInput label="First Name" {...register("user_firstname")} />
        <p>{errors.user_firstname?.message}</p>
        <TextInput label="Last Name" {...register("user_lastname")} />
        <p>{errors.user_lastname?.message}</p>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
