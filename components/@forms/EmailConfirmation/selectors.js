import { createSelector } from "reselect";

export const selectTemporaryField = createSelector(
	context => context.temporaryData,
	(_, { field }) => field,
	(data, field) => {
		return data && field && data[field];
	}
);

export const selectTypeErrorMessage = createSelector(
	context => context.typeErrors,
	(_, { field }) => field,
	(errors, field) => {
		return errors && field && errors[field] && errors[field].msg;
	}
);

export const selectErrorMessage = createSelector(
	context => context.error,
	error => error && error.message
);
