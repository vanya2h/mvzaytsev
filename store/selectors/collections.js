import { createSelector } from "reselect";

export const selectEntity = createSelector(
	(store, { model }) => store.collections[model],
	(_, { id }) => id,
	(modelStore, id) => (modelStore ? modelStore[id] : null)
);
