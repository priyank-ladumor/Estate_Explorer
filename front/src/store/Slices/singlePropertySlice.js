import { createSlice } from "@reduxjs/toolkit";
import { single_prop } from "../actions/singlepropertyaction";

const singlepropSlice = createSlice({
    name: "singleprop",
    initialState: {
      singleuser: [],
      loading: false,
      refresh: false,
      error: null,
    },
    reducers: {},
    extraReducers: {
      [single_prop.pending]: (state, action) => {
        state.loading = true;
        state.singleuser = null;
        state.error = null;
      },
      [single_prop.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.refresh = true;
        state.singleuser = payload;
        state.error = null;
      },
      [single_prop.rejected]: (state, { payload }) => {
        state.loading = false;
        state.singleuser = null;
        state.error = payload;
      }
    },
  });

export default singlepropSlice.reducer;
