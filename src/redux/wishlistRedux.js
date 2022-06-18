import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "wishlist",
  initialState: {
   productIds: [],
   error: "",
  },
  reducers: {
    addWishlist: (state, action) => {
        let isExisted = false;
        state.productIds.every((item, index) => {
            if(item === action.payload._id ) {
                isExisted = true
                return false
            } 
            return true
        })
        isExisted === true ? state.error = "This product is existed in wishlist" : state.productIds.push(action.payload._id)
    },
    removeFromWishlist: (state, action) => {
        state.productIds.every((item, index) => {
            if(item === action.payload._id ) {
                state.productIds.splice(index, 1)
                return false
            } 
            return true
        })
    },
    
  },
});

export const { addWishlist,removeFromWishlist } =
  userSlice.actions;

export default userSlice.reducer;
