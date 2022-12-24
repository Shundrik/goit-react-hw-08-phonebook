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



// ========= redux vanila HW - 7 =============

//     const initialStateFilter = "";
//     export const filterReducer = (initialStateFilter, (builder) => {
//       // .addCase(filter, state.toLoverCase().includes(state.id))
//     });

// items: [],
//       isLoading: false,
//       error: null

// import { fatchContacts } from "./operations"
// import { createReduser,combineReducers } from "@reduxjs/toolkit"; 


// const item = createReduser([],{
//     [fatchContacts.fulfilled]: (_,action)=>action.payload,
// });

// const isLoading = createReduser(false,{
//     [fatchContacts.pending]:()=>true,
//     [fatchContacts.fulfilled]: ()=>false,
//     [fatchContacts.rejected]: ()=>false,
// });
// const error = createReduser(false,{
//     [fatchContacts.rejected]:(_,action)=>action.payload,
//     [fatchContacts.pending]: ()=>null,
// });

// export  default combineReducers({
//     item,
//     isLoading,
//     error,
// })
// ========= redux vanila HW - 7 =============
// import { combineReducers, createReducer } from "@reduxjs/toolkit";
// import * as contactsActions from "./actions";

// console.log(contactsActions.fetchContactsError);

// const items = createReducer([],{
// [contactsActions.fetchContactsSuccess]:(_, action)=>action.payload,
// });

// const isLoading = createReducer(false,{
// [contactsActions.fetchContactsRequest]: ()=>true,
// [contactsActions.fetchContactsSuccess]: ()=>false,
// [contactsActions.fetchContactsError]: ()=>false,
// });

// const error = createReducer(null,{
// [contactsActions.fetchContactsRequest]: ()=>false,

// [contactsActions.fetchContactsError]:(_, action)=> action.payload,
// });

//   export default combineReducers({
//     items,
//     isLoading,
//     error,

//   }); 