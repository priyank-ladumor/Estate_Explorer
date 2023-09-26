import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from 'react-redux';
import { EmailOTPAction } from "../store/actions/password"
import { EmailOTPVerificationAction } from "../store/actions/password"
import { ThreeDots } from "react-loader-spinner";
import Passwordset from "./PasswordSet"

const schema = yup.object({
    email: yup
        .string()
        .email()
        .matches(/^\S*$/, "No whitespaces allowed")
        .required("Please Enter your Email"),
});

const EmailOTP = () => {
    const { token, message, loading } = useSelector((state) => state.password)
    const [otp, setotp] = useState(null)
    const [emailtoken, setemailtoken] = useState("")
    const [otperr, setotperr] = useState("")
    const [msg, setmsg] = useState("")
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
    useEffect(()=> {
        if(token){
            setemailtoken(token)
            sessionStorage.setItem(token,"token")
        }
    },[token])
    useEffect(()=> {
        setmsg(message)
    },[message])
    const onSubmit = (data) => {
        reset()
        dispatch(EmailOTPAction(data))
    }
    const verifyotp = () => {
        if (!otp) {
            const err = "please enter otp"
            setotperr(err)
        } else {
            setotperr("")
        }
        const otptoken = {
            otp: Number(otp)            ,
            emailtoken
        }
        console.log(otptoken);
        setotp("")
        dispatch(EmailOTPVerificationAction(otptoken))
    }
    const m = 'otp is matched'
    return (
        <div>
            {loading ? (
                <div className='d-flex justify-content-center align-items-center'>
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
                </div>
            ) : (token ? "" :
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-floating col-md-12 mx-auto">
                        <input
                            type="email"
                            className="form-control from-ctr"
                            id="floatingInput"
                            placeholder="name@example.com"
                            autoComplete="off"
                            {...register("email")}
                        />
                        <label htmlFor="floatingInput" style={{ fontSize: "18px" }}>
                            Email
                        </label>
                        <p style={{ color: "red" }}>{errors.email?.message}</p>
                    </div>
                    <button className='btn btn-primary'>Send OTP</button>
                </form>)}
            {(msg?.message === m) ? "" : (token &&
                <>
                    <div className="mt-3">
                        <div className="form-floating col-md-12 mx-auto">
                            <input type='number' className="form-control from-ctr"
                                id="floatingInput"
                                placeholder="Enter OTP"
                                autoComplete="off"
                                name='otp'
                                onChange={(e) => setotp(e.target.value)}
                                value={otp}
                            />
                            <label htmlFor="floatingInput" style={{ fontSize: "18px" }}>
                                Enter OTP
                            </label>
                            <p style={{ color: "red" }}>{otperr}</p>
                        </div>
                        <button className='btn btn-primary' onClick={verifyotp}>Verify OTP</button>
                    </div>
                </>)
            }
            {(msg?.message === m) && <Passwordset />}
        </div>
    )
}

export default EmailOTP
