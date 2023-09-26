import { createSlice } from "@reduxjs/toolkit";
import { add_prop } from "../actions/addProperty";

const addPropSlice = createSlice({
    name: "addprop",
    initialState: {
      loading: false,
      refresh: false,
      error: null,
      searchData: [],
    },
    reducers: {},
    extraReducers: {
      [add_prop.pending]: (state, action) => {
        state.loading = true;
        state.error = null;
      },
      [add_prop.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.refresh = true;
        state.error = null;
      },
      [add_prop.rejected]: (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      },
    },
  });
  
  export default addPropSlice.reducer;
  