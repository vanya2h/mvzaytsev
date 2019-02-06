import { axios } from "@utils/axios";
import * as actionTypes from "../consts/indexPage";
import { collectionsInsert } from "./collections";

export const indexPageFetchPostsStart = () => ({
	type: actionTypes.POSTS_FETCH_START
});

export const indexPageFetchPostsSuccess = (posts = [], isOverflow) => ({
	type: actionTypes.POSTS_FETCH_SUCCESS,
	payload: {
		posts,
		isOverflow
	}
});

export const indexPageFetchPostsFail = () => ({
	type: actionTypes.POSTS_FETCH_FAIL
});

const shouldFetchPosts = state => {
	return (
		!state.indexPage.posts.isHydrating && !state.indexPage.posts.isOverflow
	);
};

export const fetchPosts = () => (dispatch, getState) => {
	const state = getState();
	if (!shouldFetchPosts(state)) {
		return;
	}

	dispatch(indexPageFetchPostsStart());
	return axios
		.get("/post/entries", {
			params: {
				limit: 10,
				skip: state.indexPage.posts.postsIds
					? state.indexPage.posts.postsIds.length
					: 0
			}
		})
		.then(({ data }) => {
			dispatch(collectionsInsert("Post", data));
			dispatch(indexPageFetchPostsSuccess(data, data.length < 10));
		})
		.catch(reason => {
			console.warn("Произошла ошибка", reason);
			dispatch(indexPageFetchPostsFail());
		});
};
