import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { connect } from "react-redux";
import { compose } from "@utils/compose";
import { selectIsAuthed } from "@store/selectors/user";
import Alert from "@components/Alert";
import Heading from "@components/Heading";
import Button from "@components/Button";
import Text from "@components/Text";
import Author from "./components/Author";
import SubmitButton from "./components/SubmitButton";
import TextArea from "./components/TextArea";
import * as context from "./context";
import styles from "./styles";

class CreateComment extends React.PureComponent {
	render = () => {
		const { errorMessage, isAuthed } = this.props;

		if (!isAuthed) {
			return (
				<Alert info>
					<React.Fragment>
						<Heading size={4}>Требуется авторизация</Heading>
						<Text>
							Чтобы оставить свой комментарий к данной записи, вы должны сперва
							авторизоваться или зарегистрироваться на сайте
						</Text>
						<Link href="/auth">
							<a>
								<Button>Авторизоваться</Button>
							</a>
						</Link>
					</React.Fragment>
				</Alert>
			);
		}

		return (
			<div className={styles.wrapper}>
				<div className={styles.author}>
					<Author />
				</div>
				<div className="mt1">
					<TextArea />
				</div>
				{errorMessage && <Alert error>{errorMessage}</Alert>}
				<div className="mt2">
					<SubmitButton />
				</div>
			</div>
		);
	};
}

CreateComment.propTypes = {
	errorMessage: PropTypes.string,
	isAuthed: PropTypes.bool.isRequired
};

CreateComment.defaultProps = {
	errorMessage: null
};

const mapStoreToProps = store => ({
	isAuthed: selectIsAuthed(store)
});

const mapContextToProps = context => ({
	errorMessage: context.selectors.selectErrorMessage(context)
});

const enhance = compose(
	context.withCreateCommentFormProvider,
	context.withCreateCommentFormContext(mapContextToProps),
	connect(mapStoreToProps)
);

export default enhance(CreateComment);
