import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://127.0.0.1:5000";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (item, { rejectWithValue }) => {
    try {
      const result = await axios.post(
        `${backendURL}/register`,
        item,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(result.data));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (item, { rejectWithValue }) => {
    try {
      const result = await axios.post(
        `${backendURL}/login`,
        item,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(result.data));
      return result.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
