import { createSlice } from "@reduxjs/toolkit";
import { get_prop } from "../actions/getPropAction";

const getpropSlice = createSlice({
    name: "getprop",
    initialState: {
      getusers: [],
      loading: false,
      refresh: false,
      error: null,
      searchData: [],
    },
    reducers: {},
    extraReducers: {
      [get_prop.pending]: (state, action) => {
        state.loading = true;
        state.getusers = null;
        state.error = null;
      },
      [get_prop.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.refresh = true;
        state.getusers = payload;
        state.error = null;
      },
      [get_prop.rejected]: (state, { payload }) => {
        state.loading = false;
        state.getusers = null;
        state.error = payload;
      }
    },
  });

export default getpropSlice.reducer;
