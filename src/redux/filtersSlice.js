import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      // ✅ Immer замінить це на операцію оновлення
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;