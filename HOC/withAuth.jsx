import React from "react";
import { getDisplayName } from "@utils/getDisplayName";
import { axios } from "@utils/axios";
import { to } from "@utils/to";
import { userAuth } from "@store/actions/user";
import { retriveToken } from "@utils/retriveToken";

export const withAuth = Page => {
	const WithAuth = props => <Page {...props} />;

	WithAuth.getInitialProps = async context => {
		const token = await retriveToken(context.ctx.req);

		if (token) {
			const [error, response] = await to(
				axios.get("/user/auth", {
					headers: {
						["authorization"]: token
					}
				})
			);
			if (!error) {
				await context.ctx.store.dispatch(userAuth(response.data));
			}
		}
		return {
			...(Page.getInitialProps ? await Page.getInitialProps(context.ctx) : {})
		};
	};

	WithAuth.displayName = `WithAuth(${getDisplayName(Page)})`;

	return WithAuth;
};
