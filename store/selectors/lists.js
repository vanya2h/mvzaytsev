import { createSelector } from "reselect";

export const selectListEntityIds = createSelector(
	(store, { listId }) => store.lists.lists[listId],
	list => list
);
