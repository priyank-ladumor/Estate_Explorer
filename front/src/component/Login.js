import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/actions/authAction";
import { ThreeDots } from "react-loader-spinner";

const Login = () => {
  const { loading, error, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Please Enter your Email"),
    password: yup
      .string()
      .min(6)
      .required("Please enter your password")
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const item = {
      email: data.email,
      password: data.password,
    };

    reset();
    dispatch(loginUser(item));
  };
  console.log(success);
  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error ? (
          <div
            className="alert alert-danger"
            style={{ fontWeight: "900", fontSize: "20px" }}
            role="alert"
          >
            {error}
          </div>
        ) : (
          ""
        )}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control from-ctr"
            id="floatingInput"
            placeholder="name@example.com"
            autoComplete="off"
            {...register("email")}
          />
          <label htmlFor="floatingInput">
            <span style={{ fontSize: "18px" }}>Email Address</span>
          </label>
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        <div className="form-floating">
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control from-ctr"
            id="floatingPassword"
            placeholder="Password"
            autoComplete="off"
            {...register("password")}
          />
          <label htmlFor="floatingPassword" style={{ fontSize: "18px" }}>
            Password
          </label>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <div className="d-flex justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input border-secondary"
              type="checkbox"
              value=""
              onClick={togglePassword}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Show Password
            </label>
          </div>
          <div>
            <NavLink to="/forgotpassword" style={{textDecoration:"none"}}>
              Forgot password?
            </NavLink>
          </div>
        </div>

        <button
          className="btn form-control btn-login d-flex justify-content-center"
          type="submit"
        >
          {loading ? (
            <ThreeDots
              height="30"
              width="50"
              radius="9"
              color="#0d6efd"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Log in"
          )}
        </button>
      </form>
    </>
  );
};

export default Login;
