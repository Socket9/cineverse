import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfile: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.userProfile = action.payload;
            state.isLoggedIn = true;
        },
        logOutUser: (state) => {
            state.userProfile = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setUserProfile, logOutUser } = userSlice.actions;
export default userSlice.reducer;
