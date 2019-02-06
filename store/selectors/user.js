import { createSelector } from "reselect";

export const selectIsAuthed = createSelector(
	store => store.user,
	user => !!user.userId
);

export const selectUserField = createSelector(
	store => store.user,
	(_, { field }) => field,
	(user, field) => user.user && user.user[field]
);
