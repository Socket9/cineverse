import { createSlice } from "@reduxjs/toolkit";

const emptyState = [];

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: emptyState,
    reducers: {
        addFavorite: (state, action) => {
            const id = action.payload.media.id;
            const existingFav = state.find((favItem) => favItem.media.id === id);
            if (!existingFav) {
                state.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            const id = action.payload.media.id;
            return state.filter((favItem) => favItem.media.id !== id);
        },
        clearFavorites: () => {
            return emptyState;
        },
    },
});

export const { addFavorite, removeFavorite, isFavorite, clearFavorites } =
    favoritesSlice.actions;
export default favoritesSlice.reducer;
