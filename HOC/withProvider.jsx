import React from "react";
import { Provider } from "react-redux";
import store from "@store";
import { getDisplayName } from "@utils/getDisplayName";

export const withProvider = Page => {
	const WithProviderRedux = props => (
		<Provider store={store}>
			<Page {...props} />
		</Provider>
	);

	WithProviderRedux.getInitialProps = async context => {
		return {
			...(Page.getInitialProps ? await Page.getInitialProps(context) : {})
		};
	};

	WithProviderRedux.displayName = `WithProviderRedux(${getDisplayName(Page)})`;

	return WithProviderRedux;
};
