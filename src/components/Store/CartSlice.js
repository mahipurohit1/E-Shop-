import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      state.totalQuantity++;
      const item = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        rating: action.payload.rating,
        image: action.payload.image,
      };
      state.cartItems.push(item);
    },
  },
  removeItemFromCart(state, action) {
    state.totalQuantity--;
    const selectedId = action.payload.id;

    const updateItem = state.cartItems.filter((item) => {
      return item.id !== selectedId;
    });
    state.cartItems = updateItem;
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
