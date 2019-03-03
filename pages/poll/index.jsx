import React from "react";
import HeadComp from "next/head";
import { isBrowser } from "@utils/isBrowser";

const PollPage = () => (
	<React.Fragment>
		<HeadComp>
			<title>Максим Зайцев - опросы</title>
		</HeadComp>
	</React.Fragment>
);

class Before extends React.PureComponent {
	constructor(props) {
		super(props);

		if (isBrowser) {
			this.typeForm = require("react-typeform-embed");
		}
	}

	render = () => {
		if (!this.typeForm || !this.typeForm.ReactTypeformEmbed) {
			return null;
		}

		return (
			<this.typeForm.ReactTypeformEmbed url="https://ivanmayers.typeform.com/to/HxX8eT" />
		);
	};
}

PollPage.before = <Before />;

export default PollPage;
