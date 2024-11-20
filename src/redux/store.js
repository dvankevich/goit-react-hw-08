import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice"
import filtersReducer from "./filtersSlice";

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//   },
// });

const rootReducer = combineReducers({ 
  contacts: contactsReducer,
  filters: filtersReducer,
})

export const store = configureStore({
  reducer: rootReducer
})