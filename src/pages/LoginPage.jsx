import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
const schema = yup.object({
  username: yup.string().required("Please enter valid username"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Your password must be greater or equal than 6"),
});
const LoginPage = () => {
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
    mode: "onChange",
  });
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onSubmitHandler = (data) => {
    if (!isValid) {
      return;
    }
    login(dispatch, data);
  };
  return (
    <LoginPageStyles>
      <div className="top-container">
        <h2 className="login-title">Login</h2>
        <h4 className="login-description">
          Please login using account detail below
        </h4>
      </div>
      <form className="login-form" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="input-container">
          <input
            {...register("username")}
            className="input-login"
            id="username"
            name="username"
            placeholder="Enter your username"
            autoComplete="username"
          />
          {errors.username && (
            <p className="error-msg">{errors.username.message}</p>
          )}
        </div>
        <div className="input-container">
          <input
            {...register("password")}
            className="input-login"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
        </div>
        <Link to="/forgot" className="forgot">
          Forgot your password?
        </Link>
        <button type="submit" className="submit-btn">
          {isFetching ? <div className="spinner animate-spin"></div> : "Login"}
        </button>
        <div className="create-acc forgot">
          Don't have an Account?{" "}
          <Link to="/register" className="">
            Create account
          </Link>
        </div>
      </form>
    </LoginPageStyles>
  );
};

const LoginPageStyles = styled.div`
  width: 100%;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  .top-container {
    text-align: center;
    .login-title {
      font-size: 32px;
      line-height: 38px;
    }
    .login-description {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 20px;
      margin: 20px 0 20px 0;
      color: #9096b2;
    }
  }
  .login-form {
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
      .input-login {
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
      .error-msg {
        font-size: 14px;
        line-height: 16px;
        color: rgb(239, 68, 68);
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
      .spinner {
        margin: auto;
        width: 20px;
        height: 20px;
      }
    }
    .create-acc {
      text-align: center;
      margin-top: 20px;
    }
  }
`;
export default LoginPage;
