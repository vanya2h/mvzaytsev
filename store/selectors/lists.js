import { createSelector } from "reselect";

export const selectListEntityIds = createSelector(
	store => store.lists.lists,
	(_, { listId }) => listId,
	(lists, listId) => {
		if (listId && lists[listId]) {
			return lists[listId].items;
		}
		return null;
	}
);

export const selectListIsOverflowed = createSelector(
	store => store.lists.lists,
	(_, { listId }) => listId,
	(lists, listId) => {
		if (listId && lists[listId]) {
			return lists[listId].isOverflowed;
		}
		return false;
	}
);
