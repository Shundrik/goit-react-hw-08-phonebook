// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer,filterReducer } from './slise';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// ===== HW - 7 , from slice =====
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer,  filterReducer } from './slise';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// function addCount(){
//   console.log("проверка изменения стора");
//         }
//   store.subscribe(addCount)

// ===== HW - 7 , vanila Redux  =====

// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from "./reducer"

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: (state = '') => state,
//   },
  
// });
// console.log(store.getState());
