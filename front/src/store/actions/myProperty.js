import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://127.0.0.1:5000";

export const my_prop = createAsyncThunk(
  "myprop/get",
  async (data, { rejectWithValue }) => {
    try {
      // const uid = JSON.parse(localStorage.getItem("U_id"));
      const result = await axios.get(`${backendURL}/my_data`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: uid,
        },
      });
      console.log(result, "res myprop");
      return result.data;
    } catch (error) {
      console.log(error, "error from myprop");
    }
  }
);
