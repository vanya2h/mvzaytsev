import * as actionTypes from "../consts/lists";

export const listsInsertItems = (listId, items = [], last = false) => ({
	type: actionTypes.LIST_INSERT_ITEMS,
	payload: {
		listId,
		items,
		last
	}
});
