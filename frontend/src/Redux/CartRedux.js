import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const payload = action.payload
      const product = state.products.find((product) => product._id === payload._id)
      if(product){
        product.quantity += payload.quantity
      }
      else{
        state.products.push(payload)
      }
      state.quantity += parseInt(payload.quantity);
      state.total += payload.price * payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity = Math.max(0, state.quantity - parseInt(action.payload.quantity));
      state.products.splice(state.products.indexOf(action.payload), 1);
      state.total = Math.max(0, state.total - action.payload.price * action.payload.quantity);
    },
    updateProduct: (state, action) => {
      const payload = action.payload
      const product = state.products.find((product) => product._id === payload._id)
      if(payload.type === "decrease"){
        product.quantity -= 1;
        state.quantity = Math.max(0, state.quantity - 1);
        state.total = Math.max(0, state.total - payload.price);
      }
      else{
        product.quantity += 1;
        state.quantity = state.quantity + 1;
        state.total = state.total + payload.price;
      }
    },
    resetCart: (state, action) => {
      if(action.payload.type === 'DESTROY'){
        state = undefined
      }
    }
  },
});

export const { addProduct, removeProduct, updateProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
