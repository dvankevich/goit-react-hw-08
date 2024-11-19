import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
  },
  // Об'єкт case-редюсерів
  reducers: {
    addContact(state, action) {
      // ✅ Immer замінить це на операцію оновлення
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      // ✅ Immer замінить це на операцію оновлення
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Експортуємо фабрики екшенів
export const { addContact, deleteContact} = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;