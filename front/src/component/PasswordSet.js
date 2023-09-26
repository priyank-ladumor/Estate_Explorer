import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordAction } from '../store/actions/password';

const schema = yup.object({
    password: yup.string().required(),
    confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
});



const Passwordset = () => {
    const { token } = useSelector((state) => state.password)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const passtoken = {
            password: data.password,
            token
        }
        dispatch(ForgotPasswordAction(passtoken))
        // navigate("/userauth")
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating col-md-12 mt-3 mx-auto">
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
                <div className="form-floating col-md-12 mx-auto">
                    <input
                        type="password"
                        className="form-control from-ctr"
                        id="floatingInput"
                        placeholder="name@example.com"
                        autoComplete="off"
                        {...register("confirm_password")}
                    />
                    <label htmlFor="floatingInput" style={{ fontSize: "18px" }}>
                        Confirm Password
                    </label>
                    <p style={{ color: "red" }}>{errors.confirm_password?.message}</p>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default Passwordset
