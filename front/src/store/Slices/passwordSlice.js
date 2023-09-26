import { createSlice } from "@reduxjs/toolkit";
import { ResetPasswordAction } from "../actions/password";
import { EmailOTPAction } from "../actions/password";
import { EmailOTPVerificationAction } from "../actions/password";
import { ForgotPasswordAction } from "../actions/password";

const UpdatePasswordSlice = createSlice({
    name: "password",
    initialState: {
        loading: false,
        isloading: false,
        issloading: false,
        isssloading: false,
        data: "",
        passmsg: "",
        _otp: null,
        message: null,
        error: null,
        iserror: null,
        isserror: null,
        issserror: null,
        success: false,
        issuccess: false,
        isssuccess: false,
        issssuccess: false,
        token: null,
    },
    reducers: {},
    extraReducers: {
        [EmailOTPAction.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [EmailOTPAction.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.success = true;
            state.data = payload;
            state.token = payload.token;
        },
        [EmailOTPAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [EmailOTPVerificationAction.pending]: (state) => {
            state.isloading = true;
            state.iserror = null;
        },
        [EmailOTPVerificationAction.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            state.issuccess = true;
            state.message = payload;
        },
        [EmailOTPVerificationAction.rejected]: (state, action) => {
            state.isloading = false;
            state.iserror = action.payload;
        },
        [ForgotPasswordAction.pending]: (state, action) => {
            state.issloading = true;
            state.isserror = null;
        },
        [ForgotPasswordAction.fulfilled]: (state, { payload }) => {
            state.passmsg = payload;
            state.issloading = false;
            state.isssuccess = true;
            state.message = null;
            state.token = null;
        },
        [ForgotPasswordAction.rejected]: (state, { payload }) => {
            state.issloading = false;
            state.isserror = payload;
        },
        [ResetPasswordAction.pending]: (state, action) => {
            state.isssloading = true;
            state.issserror = null;
        },
        [ResetPasswordAction.fulfilled]: (state, { payload }) => {
            state.passmsg = payload;
            state.isssloading = false;
            state.issssuccess = true;
        },
        [ResetPasswordAction.rejected]: (state, { payload }) => {
            state.isssloading = false;
            state.issserror = payload;
        },
    },
});

export default UpdatePasswordSlice.reducer;
