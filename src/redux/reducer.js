// // import { createReducer } from "@reduxjs/toolkit";
// import { createReducer } from "@reduxjs/toolkit";
// import {addContact, deleteContact,filterContact} from "./actions"


// const initialStateContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];

// export const contactsReduser = createReducer(initialStateContacts , (builder) => {
//       builder
//         .addCase(addContact, (state, action) => {
//           console.log('del');
//           state.unshift(action.payload);
//         })
//         .addCase(deleteContact, (state, action) => {
//           console.log('del');
//           state.filter(contact => contact.id !== action.payload);
//         })
//       .addCase(filterContact,(state,action)=>{
//           console.log("del");
//           state.findId(contact => contact.id !== action.payload)
//       })
//     });
//     // export const contactsReduser = createReducer(initialState, {
//     //     [addContact]:(state, actions)=> state.push(...actions.payload),
//     //     [deleteContact]:(state, actions)=> state.filter(contact => console.log(contact)),
//     // });


//     const initialStateFilter = "";
//     export const filterReducer = (initialStateFilter, (builder) => {
//       // .addCase(filter, state.toLoverCase().includes(state.id))
//     });
