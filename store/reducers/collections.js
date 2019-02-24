import { resolveEntityId } from "@utils/resolveEntityId";
import * as actionTypes from "../consts/collections";

const initialState = {};

export const collections = (state = initialState, action) => {
	if (action.type === actionTypes.COLLECTIONS_INSERT) {
		const items = Array.isArray(action.payload.items)
			? action.payload.items
			: [action.payload.items];

		return {
			...state,
			[action.payload.model]: {
				...(state[action.payload.model] || {}),
				...items.reduce(
					(prev, item) => ({
						...prev,
						[resolveEntityId(item)]: item
					}),
					{}
				)
			}
		};
	}

	if (action.type === actionTypes.COLLECTIONS_UPDATE) {
		return {
			...state,
			[action.payload.model]: {
				...(state[action.payload.model] || {}),
				[action.payload.entityId]: {
					...(state[action.payload.model][action.payload.entityId] || {}),
					...action.payload.data
				}
			}
		};
	}

	return state;
};

export default collections;
