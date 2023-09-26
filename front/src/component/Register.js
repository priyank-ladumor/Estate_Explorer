import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/actions/authAction";
import { ThreeDots } from "react-loader-spinner";

const schema = yup.object().shape({
  username: yup
    .string()
    .min(
      4,
      "Please Enter your username and it must be at least 4 characters "
    )
    .required(),
  email: yup.string().email().required("Please Enter your Email"),
  mobile_no: yup.string()
    .required("please enter your contact number")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  password: yup
    .string()
    .min(6)
    .required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password does not match")
    .required(""),
});

const Register = () => {
  const { loading, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [imgerr, setimgerr] = useState("")
  const [img, setimg] = useState("")

  const onSubmit = (data) => {
    const item = {
      username: data.username,
      email: data.email,
      password: data.password,
      photo: img,
      mobile_no: data.mobile_no
    };
    console.log(item);
    reset();
    setimg("")
    if (img) {
      dispatch(registerUser(item));
    }
  };
  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

  const errorImg = () => {
    if (img?.length === 0) {
      const err2 = "You need to provide an image";
      setimgerr(err2);
    }
  };
  useEffect(() => {
    if (img) {
      setimgerr("")
    }
  }, [img])
  console.log(img);
  const uploadimages = (e) => {
    const files = e.target.files;
    const imagePromises = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file) {
        const reader = new FileReader();
        imagePromises.push(
          new Promise((resolve) => {
            reader.onload = (e) => {
              resolve(e.target.result);
            };
            reader.readAsDataURL(file);
          })
        );
      }
    }

    Promise.all(imagePromises).then((results) => {
      setimg(results);
    });
  }
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

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
        <div className="form-floating mb-4">
          <input
            type="text"
            className="form-control from-ctr"
            id="floatingInput"
            placeholder="name@example.com"
            autoComplete="off"
            {...register("username")}
          />
          <label htmlFor="floatingInput" style={{ fontSize: "18px" }}>
            Username
          </label>
          <p style={{ color: "red" }}>{errors.username?.message}</p>
        </div>
        <div className="form-floating mb-4">
          <input
            type="email"
            className="form-control from-ctr"
            id="floatingInput"
            placeholder="name@example.com"
            autoComplete="off"
            {...register("email")}
          />
          <label htmlFor="floatingInput" style={{ fontSize: "18px" }}>
            Email Address
          </label>
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>
        <div className="d-flex align-items-center col-12">
          <div className="col-8 form-floating d-flex align-items-center">
            <input
              type="int"
              maxLength={10}
              className="form-control from-ctr"
              id="floatingInput"
              placeholder="name@example.com"
              autoComplete="off"
              {...register("mobile_no")}
            />
            <label htmlFor="floatingInput" style={{ fontSize: "18px" }}>
              Phone No.
            </label>
          </div>

          <label htmlFor="uploadimg" className="btn btn-outline-dark col-4 rounded d-flex align-items-center justify-content-center"
            style={{ color: "black", cursor: "pointer", height: "54px", fontSize: "18px" }}>Upload Profile</label>
        </div>
        <div className="d-flex col-12">
          <p style={{ color: "red" }} className="col-8">{errors.mobile_no?.message}</p>
          <p style={{ color: "red" }} className="col-4">{imgerr}</p>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <input
            accept=".jpg,.jpeg,.png"
            type="file"
            className="form-control from-ctr"
            id="uploadimg"
            style={{ display: "none" }}
            onChange={uploadimages}
          />
        </div>
        <div col-12>
          {img && <img src={img[0]} alt="profile-img" className="col-md-6 img-fluid  rounded-thumbnail mx-auto" />}

        </div>

        <div className="form-floating mb-4">
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control from-ctr"
            id="floatingInput"
            placeholder="name@example.com"
            autoComplete="off"
            {...register("password")}
          />
          <label htmlFor="floatingInput" style={{ fontSize: "18px" }}>
            Password
          </label>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <div className="form-floating mb-4">
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control from-ctr"
            id="floatingInput"
            placeholder="name@example.com"
            autoComplete="off"
            {...register("confirmPassword")}
          />
          <label htmlFor="floatingInput" style={{ fontSize: "18px" }}>
            Confirm Password
          </label>
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        </div>

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

        <button
          className="btn form-control btn-login d-flex justify-content-center"
          type="submit"
          onClick={errorImg}
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
            "Register"
          )}
        </button>
      </form>
    </>
  );
};

export default Register;
