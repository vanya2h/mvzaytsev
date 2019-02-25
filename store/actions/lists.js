import * as actionTypes from "../consts/lists";

export const listsInsertItems = (listId, items = []) => ({
	type: actionTypes.LIST_INSERT_ITEMS,
	payload: {
		listId,
		items
	}
});
