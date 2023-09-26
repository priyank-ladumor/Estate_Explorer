import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

const backendURL = "http://127.0.0.1:5000";




export const EmailOTPAction = createAsyncThunk(
    "forgetpassword/email",
    async (item, { rejectWithValue }) => {
        try {
            const result = await axios.post(
                `${backendURL}/send_otp`,
                item,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (result.data.token) {
                toast.success('OTP has been sent to email', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }else{
                toast.error('Please provide verified email', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            return result.data;
        } catch (error) {
            console.log(error, "err from email");
        }
    }
);


export const EmailOTPVerificationAction = createAsyncThunk(
    "forgetpassword/otp",
    async (otptoken, { rejectWithValue }) => {
        try {
            const result = await axios.post(
                `${backendURL}/check_otp`,
                otptoken,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: otptoken.emailtoken,
                    },
                }
            );
            if (result.data.message === "otp doesn't matched") {
                toast.error('OTP does not matched', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }else{
                toast.success('OTP is matched', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            console.log(result);
            return result.data;
        } catch (error) {
            console.log(error, "err from otp verication");
        }
    }
);

export const ForgotPasswordAction = createAsyncThunk(
    "forgetpassword/newpassword",
    async (passtoken, { rejectWithValue }) => {
        try {
            const result = await axios.patch(
                `${backendURL}/change_user_password`,
                passtoken,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: passtoken.token,
                    },
                }
            );
            if (result.data.message === "Your password has changed successfully") {
                toast.success("Your password has changed successfully", {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }else{
                toast.error('"Your password has not changed successfully"', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            console.log(result);
            return result.data;
        } catch (error) {
            console.log(error, "err from new password");
        }
    }
);


export const ResetPasswordAction = createAsyncThunk(
    "password/reset",
    async (data, { rejectWithValue }) => {
        const userDetail = JSON.parse(localStorage.getItem("userInfo"));
        const token = userDetail.token;
        try {
            const result = await axios.patch(`${backendURL}/change_user_password`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            toast.success('Reset Password Successfully', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });


            return result.data;
        } catch (error) {
            console.log(error, "error from reset password");
        }
    }
);