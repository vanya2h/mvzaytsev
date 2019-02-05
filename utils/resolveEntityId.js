export const resolveEntityId = entity => {
	if (entity) {
		if (typeof entity === "string") {
			return entity;
		}

		if (typeof entity._id === "string") {
			return entity._id;
		}
	}

	return null;
};

export default resolveEntityId;
