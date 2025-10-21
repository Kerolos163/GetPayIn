import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoleState {
  role: string;
}

const initialState: RoleState = {
  role: "USER",
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
    isAdmin(state) {
      state.role = "ADMIN";
    },
  },
});

export const { setRole, isAdmin } = roleSlice.actions;
export default roleSlice.reducer;
