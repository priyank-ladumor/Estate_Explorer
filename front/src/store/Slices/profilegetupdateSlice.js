import { createSlice } from "@reduxjs/toolkit";
import { GetProfileAction } from "../actions/profilegetupdate";
import { UpdateProfileAction } from "../actions/profilegetupdate";

const initialState = {
    loading: false,
    isloading: false,
    profiledata: [],
    Updatedata: [],
    error: null,
    iserror: null,
    success: false,
    issuccess: false,
};

const GetUpdateProfileSlice = createSlice({
    name: "getupdateprofile",
    initialState,
    reducers: {

    },
    extraReducers: {
        [GetProfileAction.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [GetProfileAction.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.success = true;
            state.profiledata = payload;
        },
        [GetProfileAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        },
        [UpdateProfileAction.pending]: (state) => {
            state.isloading = true;
            state.iserror = null;
        },
        [UpdateProfileAction.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.issuccess = true;
            state.Updatedata = payload;
        },
        [UpdateProfileAction.rejected]: (state, action) => {
            state.isloading = false;
            state.iserror = action.payload;
            state.issuccess = false;
        },

    },
});

export default GetUpdateProfileSlice.reducer;