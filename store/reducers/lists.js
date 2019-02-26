import * as actionTypes from "../consts/lists";

const initialState = {
	lists: {}
};

export const lists = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.LIST_INSERT_ITEMS:
		return {
			...state,
			lists: {
				...(state.lists || {}),
				[action.payload.listId]: {
					...(state.lists[action.payload.listId] || {}),
					isOverflowed: action.payload.last,
					items: [
						...(state.lists[action.payload.listId]
							? state.lists[action.payload.listId].items
							: []),
						...action.payload.items
					]
				}
			}
		};

	default:
		return state;
	}
};

export default lists;
