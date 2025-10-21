import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LockState {
  locked: boolean;
}
const initialState: LockState = {
  locked: false,
};

const lockSlice = createSlice({
  name: "lock",
  initialState,
  reducers: {
    setLocked(state, action: PayloadAction<boolean>) {
      state.locked = action.payload;
    },
  },
});

export const { setLocked } = lockSlice.actions;
export default lockSlice.reducer;
