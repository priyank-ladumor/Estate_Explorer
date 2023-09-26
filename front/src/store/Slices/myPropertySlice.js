import { createSlice } from "@reduxjs/toolkit";
import { my_prop } from "../actions/myProperty";

const myPropSlice = createSlice({
    name: "myprop",
    initialState: {
        usersprop: [],
        u_id: "",
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [my_prop.pending]: (state, action) => {
            state.loading = true;
            state.usersprop = null;
            state.error = null;
        },
        [my_prop.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.usersprop = payload;
            state.error = null;
        },
        [my_prop.rejected]: (state, { payload }) => {
            state.loading = false;
            state.usersprop = null;
            state.error = payload;
        },
    },
});

export default myPropSlice.reducer;
