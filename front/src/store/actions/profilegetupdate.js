import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {  toast } from 'react-toastify';

const backendURL = "http://127.0.0.1:5000";

export const GetProfileAction = createAsyncThunk(
    "profile/get",
    async (item, { rejectWithValue }) => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
        const token = user.token;
        try {
            const result = await axios.get(
                `${backendURL}/user_data`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                }
            );
            console.log(result, "res get profile");
            return result.data;
        } catch (error) {
            console.log(error, "err from get profile");
        }
    }
);

export const UpdateProfileAction = createAsyncThunk(
    "profile/update",
    async (item, { rejectWithValue }) => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
        const token = user.token;
        try {
            const result = await axios.patch(
                `${backendURL}/update_user_data`,
                item,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                }
            );
            toast.success('User details has been updated', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            console.log(result, "res update_user_data");
            return result.data;
        } catch (error) {
            console.log(error, "err from update_user_data");
        }
    }
);