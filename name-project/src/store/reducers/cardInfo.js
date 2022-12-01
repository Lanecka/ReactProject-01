import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    card: {}
  },
  reducers: {
    cardDepiction(state, action) {
      state.card = action.payload
    }
  }
})

export const { cardDepiction } = cardSlice.actions;
export default cardSlice.reducer;