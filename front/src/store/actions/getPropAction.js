import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://127.0.0.1:5000";

export const get_prop = createAsyncThunk(
  "getprop/get",
  async (data, { rejectWithValue }) => {
    // const userDetail = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(userDetail);
    // const token = userDetail.token;
    try {
      const result = await axios.get(`${backendURL}/sdata`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: token,
        },
      });
      console.log(result, "res getprop");
      return result.data;
    } catch (error) {
      console.log(error, "error from getprop");
    }
  }
);
