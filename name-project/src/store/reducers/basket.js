import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    pricesProducts: 0,
    count: 0
  },
  reducers: {
    addProduct(state, action) {
      state.basket.push(action.payload)
      state.pricesProducts = state.basket.reduce((sum, current) => {
        return sum + current.price
      }, 0)
      state.count = state.basket.length
    },
    removeProductBasket(state, action) {
      state.basket = state.basket.filter((item) =>
        item.id !== action.payload.id
      )
      state.pricesProducts = state.basket.reduce((sum, current) => {
        return sum + current.price
      }, 0)
      state.count = state.basket.length
    }
  }
})

export const { addProduct, removeProductBasket } = basketSlice.actions;
export default basketSlice.reducer;