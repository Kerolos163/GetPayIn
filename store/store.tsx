import { configureStore } from "@reduxjs/toolkit";
import lockReducer from "./slices/lockSlice";
import productReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySlice";
import roleReducer from "./slices/roleSclice";

const store = configureStore({
  reducer: {
    lock: lockReducer,
    role: roleReducer,
    product: productReducer,
    category: categoryReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
