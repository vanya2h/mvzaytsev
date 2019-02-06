import * as actionTypes from "../consts/collections";

export const collectionsInsert = (model, items) => ({
	type: actionTypes.COLLECTIONS_INSERT,
	payload: {
		model,
		items
	}
});

export const collectionsUpdate = (model, entityId, data) => ({
	type: actionTypes.COLLECTIONS_UPDATE,
	payload: {
		model,
		entityId,
		data
	}
});
