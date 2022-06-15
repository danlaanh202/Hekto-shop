import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    filter: [],
  },
  reducers: {
    searchInputChange: (state, action) => {
      state.searchQuery = action.payload.query;
    },
  },
});

export const { searchInputChange } = searchSlice.actions;

export default searchSlice.reducer;
