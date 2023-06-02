import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },

    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: action.payload,
      };
    },

    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...state.items, ...action.payload],
      };
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export const contactReducer = contactsReducer.reducer;
