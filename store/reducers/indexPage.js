import { resolveEntityId } from "@utils/resolveEntityId";
import * as actionTypes from "../consts/indexPage";

const initialState = {
	posts: {
		postsIds: null,
		isHydrating: false,
		isOverflow: false,
		hasError: false
	}
};

export const indexPage = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.POSTS_FETCH_START:
		return {
			...state,
			posts: {
				...state.posts,
				isHydrating: true,
				hasError: false,
				isOverflow: false
			}
		};
	case actionTypes.POSTS_FETCH_SUCCESS:
		return {
			...state,
			posts: {
				...state.posts,
				isHydrating: false,
				postsIds: [
					...(state.posts.postsIds || []),
					...action.payload.posts.map(resolveEntityId)
				],
				isOverflow: action.payload.isOverflow
			}
		};
	case actionTypes.POSTS_FETCH_FAIL:
		return {
			...state,
			posts: {
				...state.posts,
				isHydrating: false,
				hasError: true
			}
		};
	default:
		return state;
	}
};

export default indexPage;
