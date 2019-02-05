import { resolveEntityId } from "@utils/resolveEntityId";
import * as actionTypes from "../consts/indexPage";

const initialState = {
	blogs: {
		blogsIds: null,
		blogs: null,
		isHydrating: false,
		hasError: false
	}
};

export const indexPage = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.BLOGS_FETCH_START:
		return {
			...state,
			blogs: {
				...state.blogs,
				isHydrating: true,
				hasError: false,
				blogs: null,
				blogsIds: null
			}
		};
	case actionTypes.BLOGS_FETCH_SUCCESS:
		return {
			...state,
			blogs: {
				...state.blogs,
				isHydrating: false,
				blogs: action.payload.blogs,
				blogsIds: action.payload.blogs.map(resolveEntityId)
			}
		};
	case actionTypes.BLOGS_FETCH_FAIL:
		return {
			...state,
			blogs: {
				...state.blogs,
				isHydrating: false,
				hasError: true
			}
		};
	default:
		return state;
	}
};

export default indexPage;
