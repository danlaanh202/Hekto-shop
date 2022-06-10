import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      let isExisted = false;
      state.products.every((item, index) => {
        if (item._id === action.payload._id) {
          item.amount += action.payload.amount; //if product is existed, plus 1
          isExisted = true;
          state.total += action.payload.price * action.payload.amount;
          return false;
        }
        return true;
      });
      if (isExisted) return;

      state.products.push(action.payload); //payload contains an object with { productId: abcxyz, amount: 1, price: }
      state.total += action.payload.price * action.payload.amount;
    },
    increaseAmount: (state, action) => {
      //payload has {productId: abcxyz, amount: x, price: 10k}
      state.products.every((item, index) => {
        if (item.id === action.payload._id) {
          item.amount += 1; //if product is existed, plus 1
          state.total += action.payload.price;
          return false;
        }
        return true;
      });
    },
    decreaseAmount: (state, action) => {
      //payload has {productId: abcxyz, amount: x, price: 10k}
      state.products.every((item, index, currentArray) => {
        if (item.id === action.payload._id) {
          if (item.amount === 1) {
            currentArray.splice(index, 1); //remove item out of array products
          } else {
            item.amount -= 1; //if product is existed, decrease 1
          }
          return false;
        }
        return true;
      });
      state.total -= action.payload.price; //total = total - payload.price
    },
    removeProduct: (state, action) => {
      state.products.every((item, index, currentArray) => {
        if (item.id === action.payload._id) {
          state.total = state.total - item.amount * item.price;
          currentArray.slice(index, 1); //remove item
          return false;
        }
        return true;
      });
    },
    clearAllItem: (state, action) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const {
  addProduct,
  increaseAmount,
  decreaseAmount,
  removeProduct,
  clearAllItem,
} = cartSlice.actions;
export default cartSlice.reducer;
