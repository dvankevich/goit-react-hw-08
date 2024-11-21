/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts } from './contactsOps';

const contactsSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const { fetchInProgress, fetchSuccess, fetchError } =
//   contactsSlice.actions;

export default contactsSlice.reducer;

// const slice = createSlice({
//   // Ім'я слайсу
//   name: "contacts",
//   // Початковий стан редюсера слайсу
//   initialState: {
//       items: [{ "id": "id-1", "name": "Rosie Simpson_", "number": "459-12-56" },
//           { "id": "id-2", "name": "Hermione Kline_", "number": "443-89-12" },
//           { "id": "id-3", "name": "Eden Clements_", "number": "645-17-79" },
//           { "id": "id-4", "name": "Annie Copeland_", "number": "227-91-26" }],
//   },
//   // Об'єкт case-редюсерів
//   reducers: {
//     addContact(state, action) {
//       // ✅ Immer замінить це на операцію оновлення
//       state.items.push(action.payload);
//     },
//     deleteContact(state, action) {
//       // ✅ Immer замінить це на операцію оновлення
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// // Експортуємо фабрики екшенів
// export const { addContact, deleteContact} = slice.actions;

// // Експортуємо редюсер слайсу
// export default slice.reducer;
