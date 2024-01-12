import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/slice";
import searchKeyReducer from "./search/slice";
import favoritesReducer from "./favorites/slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        search: searchKeyReducer,
        favorites: favoritesReducer
    },
});
