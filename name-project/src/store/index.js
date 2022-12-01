import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reducers/basket';
import cardReducer from './reducers/cardInfo';

export default configureStore({
  reducer: {
    basket: basketReducer,
    card: cardReducer
  }
})