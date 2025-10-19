import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CategoryModel from "../../model/category_model";

interface CategoryState {
  categories: CategoryModel[];
  selectedCategory: string;
}

const initialState: CategoryState = {
  categories: [],
  selectedCategory: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    setCategories(state, action: PayloadAction<CategoryModel[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
