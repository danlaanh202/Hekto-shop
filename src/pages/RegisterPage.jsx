import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { publicRequest } from "../request-method/requestMethod";
const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Your password must be greater or equal than 6"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  passwordAgain: yup
    .string()
    .required("This field is required")
    .oneOf(
      [yup.ref("password")],
      "Confirm Password must be the same as password"
    ),
  term: yup
    .boolean()
    .required("You must accept our Terms of Services!!")
    .oneOf([true], "You must accept our Terms of Services!!"),
});
const RegisterPageStyles = styled.div`
  .error-msg {
    font-size: 14px;
    line-height: 16px;
    color: rgb(239, 68, 68);
    margin: 8px 0;
  }
  width: 100%;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  .top-container {
    text-align: center;
    .register-title {
      font-size: 32px;
      line-height: 38px;
    }
    .register-description {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;
      margin: 20px 0 20px 0;
      color: #9096b2;
    }
  }
  .register-form {
    width: 100%;
    .forgot {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;

      color: #9096b2;
      margin-bottom: 20px;
      display: block;
    }
    .input-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 20px 0;
      .input-register {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        outline: none;
        padding: 16px;
        border: 1px solid #c2c5e1;
        border-radius: 2px;
      }
    }
    .term-container {
      margin: 20px 0;
      display: flex;
      align-items: center;
      gap: 10px;
      .input-term {
        width: 20px;
        height: 20px;
      }
      .term-agreement {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;

        color: #9096b2;
      }
    }
    .submit-btn {
      width: 100%;
      padding: 16px 0;
      background: #fb2e86;
      border-radius: 3px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      color: #ffffff;
    }
    .already-have {
      text-align: center;
      margin-top: 20px;
    }
  }
`;
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setValue,
    getValues,
    control,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const onSubmitHandler = async (data) => {
    if (!isValid) {
      return;
    }
    const { username, email, password } = data;
    console.log({ username, email, password });
    const res = await publicRequest.post("/auth/register", {
      username: username,
      email: email,
      password: password,
    });
    console.log(res);
  };
  return (
    <RegisterPageStyles>
      <div className="top-container">
        <h2 className="register-title">Register</h2>
        <h4 className="register-description">
          Please login using account detail below
        </h4>
      </div>
      <form className="register-form" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="input-container">
          <input
            {...register("username")}
            className="input-register"
            id="username"
            name="username"
            placeholder="Username"
          />
          {errors.username && (
            <p className="error-msg">{errors.username?.message}</p>
          )}
        </div>
        <div className="input-container">
          <input
            {...register("email")}
            className="input-register"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
          />
          {errors.email && <p className="error-msg">{errors.email?.message}</p>}
        </div>
        <div className="input-container">
          <input
            {...register("password")}
            className="input-register"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="error-msg">{errors.password?.message}</p>
          )}
        </div>
        <div className="input-container">
          <input
            {...register("passwordAgain")}
            className="input-register"
            id="passwordAgain"
            name="passwordAgain"
            type="password"
            placeholder="Password again"
          />
          {errors.passwordAgain && (
            <p className="error-msg">{errors.passwordAgain?.message}</p>
          )}
        </div>
        <div className="term-container">
          <input
            type="checkbox"
            {...register("term")}
            className="input-term"
            id="term"
            name="term"
          />
          <span className="term-agreement">I agree with Terms of Service</span>
        </div>
        {errors.term && <p className="error-msg">{errors.term?.message}</p>}
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <div className="already-have forgot">
          Already have an account?{" "}
          <Link to="/login" className="">
            Login
          </Link>
        </div>
      </form>
    </RegisterPageStyles>
  );
};

export default RegisterPage;
