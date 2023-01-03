import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage)
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (credentials, thunkAPI) => {
       console.log('add Options');
       console.log(credentials);

    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage)
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
      return thunkAPI.rejectWithValue(error.massage)
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
      return thunkAPI.rejectWithValue(error.massage)
    }
  }
);
