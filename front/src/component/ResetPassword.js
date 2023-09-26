import React, { useEffect } from 'react'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ResetPasswordAction } from '../store/actions/password';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
    password: yup
        .string()
        .min(6)
        .required("Please enter your password"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "password does not match")
        .required(""),
});

const ResetPassword = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        reset();
        const item = {
            password: data.password
        }
        console.log(item);
        dispatch(ResetPasswordAction(item))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-4">
                    <input
                        type="password"
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
                        type="password"
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
                <button type="submit" className="btn btn-primary form-control" data-bs-dismiss={(errors.confirmPassword?.message || errors.password?.message) ? "" : "modal"} >Reset Password</button>
            </form>
        </div>
    )
}

export default ResetPassword
