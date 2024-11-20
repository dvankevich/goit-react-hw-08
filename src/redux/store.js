import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice"
import filtersReducer from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

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
  
};

const rootReducer = combineReducers({ 
  contacts: contactsReducer,
  filters: filtersReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  // hide A non-serializable value was detected in an action, in the path: `register` error
  // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);