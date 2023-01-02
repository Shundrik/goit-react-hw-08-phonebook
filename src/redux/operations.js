import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://639eddc35eb8889197ee98fe.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      console.log(error.massage);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',

  async ({ name, phone }, thunkAPI) => {
       console.log('add Options');
    try {
      const { data } = await axios.post('/contacts', { name, phone });
      return data;
    } catch (error) {
      console.log(error.massage);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      console.log(error.massage);
    }
  }
);
export const filterContact = createAsyncThunk(
  'contacts/filterContact',
  async (value, thunkAPI) => {
    console.log('del');
    try {
      const { data } = await axios.get(`/contacts/${value}`);
      return data;
    } catch (error) {
      console.log(error.massage);
    }
  }
);

// ===== HW - 7 , vanila Redux  =====

// import * as contactsActions from "./actions"
// import * as contactsAPI from "../api/api"

// export const fetchContacts = () => async dispatch => {
//     console.log("fetchAction");
//     dispatch(contactsActions.fetchContactsRequest());

//     try {
//         const contacts = await contactsAPI.fetchContacts();
//         dispatch(contactsActions.fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(contactsActions.fetchContactsError(error));
//     }

// };
