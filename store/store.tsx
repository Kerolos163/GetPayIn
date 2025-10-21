import { configureStore } from "@reduxjs/toolkit";
import lockReducer from "./slices/lockSlice";
import productReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    lock: lockReducer,
    product: productReducer,
    category: categoryReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
