import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://127.0.0.1:5000";

export const single_prop = createAsyncThunk(
  "singleprop/get",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.get(`${backendURL}/adata/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(result, "res single data");
      return result.data;
    } catch (error) {
      console.log(error, "error from single data");
    }
  }
);
