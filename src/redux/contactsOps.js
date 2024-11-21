// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену це рядок "contacts/fetchAll".
// addContact - додавання нового контакту (метод POST). Базовий тип екшену це рядок "contacts/addContact".
// deleteContact - видалення контакту по ID (метод DELETE). Базовий тип екшену це рядок "contacts/deleteContact".

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchInProgress,
//   fetchSuccess,
//   fetchError,
// } from "./contactsSlice";

// Встановлюємо базову URL-адресу
// для всіх запитів axios
axios.defaults.baseURL = 'https://673f006da9bc276ec4b6b6b0.mockapi.io/';

// export const fetchContacts = createAsyncThunk('tasks/fetchAll', async () => {
//   const response = await axios.get('/contacts');
//   return response.data;
// });

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// // Оголошення асинхронної операції
// // fetchContacts для отримання даних
// export const fetchContacts = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchInProgress());
//     // HTTP-запит
//     const response = await axios.get("/contacts");
//     // Обробка даних
//     dispatch(fetchSuccess(response.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchError(e.message));
//   }
// };
