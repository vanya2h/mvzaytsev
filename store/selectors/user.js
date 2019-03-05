import { createSelector } from "reselect";
import { selectEntity } from "@store/selectors/collections";

export const selectUserId = createSelector(
	store => store.user && store.user.user,
	userId => userId
);

export const selectIsAuthed = createSelector(
	selectUserId,
	userId => !!userId
);

const selectUser = createSelector(
	store =>
		selectEntity(store, {
			id: store.user.user,
			model: "User"
		}),
	user => user
);

export const selectUserField = createSelector(
	selectUser,
	(_, { field }) => field,
	(user, field) => {
		return user && user[field];
	}
);

export const selectIsVerified = createSelector(
	selectUser,
	user => user && user.emailConfirmed
);

export const selectIsAdmin = createSelector(
	selectUser,
	user => user && user.isAdmin
);
