import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from "../contacts/selectors"

export const selectContactsFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) =>
    contacts.filter(contact => {
      return (contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.toLowerCase().includes(filter.toLowerCase()))
      }
    )
);
