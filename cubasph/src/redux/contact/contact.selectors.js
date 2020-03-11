import {createSelector} from 'reselect';

const selectContact = state => state.contactReducer;

export const selectContactName= createSelector(
    [selectContact],
    contact => contact.name
);

export const selectContactEmail= createSelector(
    [selectContact],
    contact => contact.email
);

export const selectContactSubject= createSelector(
    [selectContact],
    contact => contact.subject
);

export const selectContactBody= createSelector(
    [selectContact],
    contact => contact.body
);