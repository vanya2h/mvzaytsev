import { createSelector } from "reselect";
import { resolveEntityId } from "@utils";

const selectIndexPage = createSelector(state => state.indexPage);

export const selectBlog = createSelector(
	selectIndexPage,
	(_, { blogId }) => blogId,
	({ blogs }, blogId) => blogs.find(blog => resolveEntityId(blog) === blogId)
);
