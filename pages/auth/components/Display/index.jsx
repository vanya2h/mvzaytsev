import React from "react";
import PropTypes from "prop-types";
import UserIcon from "react-feather/dist/icons/user";
import { connect } from "react-redux";
import Head from "next/head";
import { compose } from "@utils/compose";
import { selectIsAuthed, selectUserField } from "@store/selectors/user";
import AuthForm from "@components/@forms/AuthForm";
import SmallContainer from "@components/SmallContainer";
import Block from "@components/Block";
import Profile from "../Profile";

class Display extends React.PureComponent {
	render = () => {
		const { isAuthed, name } = this.props;

		if (!isAuthed) {
			return (
				<React.Fragment>
					<Head>
						<title>Авторизация в системе</title>
					</Head>
					<SmallContainer>
						<Block icon={<UserIcon />} title="Авторизация">
							<AuthForm />
						</Block>
					</SmallContainer>
				</React.Fragment>
			);
		}

		return (
			<React.Fragment>
				<Head>
					<title>Добро пожаловать, {name}</title>
				</Head>
				<SmallContainer>
					<Block icon={<UserIcon />} title="Добро пожаловать">
						<Profile />
					</Block>
				</SmallContainer>
			</React.Fragment>
		);
	};
}

Display.propTypes = {
	isAuthed: PropTypes.bool.isRequired,
	name: PropTypes.string
};

Display.defaultProps = {
	name: null
};

const enhance = compose(
	connect(store => ({
		isAuthed: selectIsAuthed(store),
		name: selectUserField(store, {
			field: "name"
		})
	}))
);

export default enhance(Display);
