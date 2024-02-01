import { configureStore } from "@reduxjs/toolkit";
import  { contactsReducer }  from './contacts/contactsSlise';
import { filtersReducer } from './filter/filterSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { authReducer } from "./auth/authSlice";
import storage from 'redux-persist/lib/storage';


const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}


export const store = configureStore({
    reducer: {
     contacts: contactsReducer,
     filter: filtersReducer,
     auth: persistReducer(authConfig, authReducer),
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER ]
      },
    })
});


export const persistor = persistStore(store);