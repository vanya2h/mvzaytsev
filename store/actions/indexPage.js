import { axios } from "@utils/axios";
import * as actionTypes from "../consts/indexPage";

export const indexPageFetchBlogsStart = () => ({
	type: actionTypes.BLOGS_FETCH_START
});

export const indexPageFetchBlogsSuccess = (blogs = []) => ({
	type: actionTypes.BLOGS_FETCH_SUCCESS,
	payload: {
		blogs
	}
});

export const indexPageFetchBlogsFail = () => ({
	type: actionTypes.BLOGS_FETCH_FAIL
});

const shouldFetchPosts = state => {
	return !state.indexPage.blogs.isHydrating && !state.indexPage.blogs.blogsIds;
};

export const fetchBlogs = () => (dispatch, getState) => {
	if (!shouldFetchPosts(getState())) {
		return;
	}
	console.log("move");
	dispatch(indexPageFetchBlogsStart());

	return axios
		.get("/blogs/entries", {
			params: {
				limit: 10,
				skip: 0
			}
		})
		.then(({ data }) => dispatch(indexPageFetchBlogsSuccess(data)))
		.catch(reason => {
			console.warn("Произошла ошибка", reason);
			dispatch(indexPageFetchBlogsFail());
		});
};
