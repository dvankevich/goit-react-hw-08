import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice"
import filtersReducer from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";

//https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//   },
// });

const persistConfig = {
  key: "root",
  storage,
  blacklist:['filters'], // не зберігати filters
  debug: true, // Set to true to receive warnings about non-serializable values
};

const rootReducer = combineReducers({ 
  contacts: contactsReducer,
  filters: filtersReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);