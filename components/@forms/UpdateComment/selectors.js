import { createSelector } from "reselect";

export const selectTemporaryField = createSelector(
	context => context.temporaryData,
	(_, { field }) => field,
	(temporaryData, field) => field && temporaryData[field]
);

export const selectCommentField = createSelector(
	context => context.comment,
	(_, { field }) => field,
	(comment, field) => field && comment && comment[field]
);

export const selectField = createSelector(
	selectTemporaryField,
	selectCommentField,
	(temp, current) => {
		if (temp !== undefined) return temp;

		return current;
	}
);

export const selectTypeErrorMessage = createSelector(
	context => context.typeErrors,
	(_, { field }) => field,
	(errors, field) => errors && field && errors[field]
);

export const selectErrorMessage = createSelector(
	context => context.error,
	error => error && error.message
);
