import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchKeyword: "",
};

export const searchKeySlice = createSlice({
    name: "searchKey",
    initialState,
    reducers: {
        addSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
        },
        resetSearchKeyword: (state) => {
            state.searchKeyword = "";
        },
    },
});

export const { addSearchKeyword, resetSearchKeyword } = searchKeySlice.actions;
export default searchKeySlice.reducer;
