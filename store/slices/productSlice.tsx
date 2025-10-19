import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductModel from "../../model/product_model";

interface ProductState {
  products: ProductModel[];
}

const initialState: ProductState = {
  products: [],
};

const producrtSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductModel[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<ProductModel>) {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct, setProducts } = producrtSlice.actions;
export default producrtSlice.reducer;
