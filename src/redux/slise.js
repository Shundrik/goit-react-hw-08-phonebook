// ===== HW - 6 , Slice  =====
// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const initialStateContacts = {
//   contacts:

//   [

//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialStateContacts,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         const inList = state.contacts.find(
//           contact =>
//             contact.name.toLowerCase() === action.payload.name.toLowerCase()
//         );
//         inList
//           ? alert(`${action.payload.name} is alrady in contacts`)
//           : state.contacts.unshift(action.payload);
//       },
//       prepare({ name, number }) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.contacts.findIndex(
//         contact => contact.id === action.payload
//       );

//       state.contacts.splice(index, 1);
//     },
//   },
// });

// export const { addContact, deleteContact,  } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

// ===== HW - 7 , Slice  =====

import { createSlice } from '@reduxjs/toolkit';
import * as fetchOperations from './operations';

// console.log(fetchOperations.addContact.type);
const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchOperations.fetchContacts.pending](state) {
      state.isLoading = true;
    },

    [fetchOperations.addContact.pending](state, action) {
      console.log('add pending');

      state.isLoading = true;
    },

    [fetchOperations.deleteContact.pending](state) {
      state.isLoading = true;
    },

    [fetchOperations.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    [fetchOperations.addContact.fulfilled](state, action) {
      console.log('add fulfilled');
      const inList = state.items.find(
        item => item.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      inList
        ? alert(`${action.payload.name} is alrady in contacts`)
        : state.items.unshift(action.payload);

      state.isLoading = false;
      state.error = null;
    },

    [fetchOperations.deleteContact.fulfilled](state, action) {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.isLoading = false;
      state.error = null;
    },

    [fetchOperations.addContact.error](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchOperations.deleteContact.error](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchOperations.fetchContacts.error](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsActions = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

const initialStatefilter = '';

const filterSlise = createSlice({
  name: 'filter',
  initialState: initialStatefilter,
  reducers: {
    myFilter: {
      reducer(state, action) {
        console.log(action.payload);
        return (state = action.payload.toLowerCase());
      },
    },
  },
});

export const { myFilter } = filterSlise.actions;
export const filterReducer = filterSlise.reducer;
