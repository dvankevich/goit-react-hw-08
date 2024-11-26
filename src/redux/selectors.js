import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from "./contacts/selectors"

// export const selectContacts = state => state.contacts.items;
// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;
export const selectContactsFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
