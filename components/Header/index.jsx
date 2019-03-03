import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "@utils/compose";
import { selectIsAuthed } from "@store/selectors/user";
import Menu from "./components/Menu";
import User from "./components/User";
import AuthButton from "./components/AuthButton";
import Clock from "./components/Clock";
import styles from "./styles";

class Header extends React.PureComponent {
	render = () => {
		const { isAuthed } = this.props;

		return (
			<div className={styles.header}>
				<div className={styles.menu}>
					<Menu />
				</div>
				<div className={styles.clock}>
					<Clock />
				</div>
				<div className={styles.user}>
					{isAuthed ? <User /> : <AuthButton />}
				</div>
			</div>
		);
	};
}

Header.propTypes = {
	isAuthed: PropTypes.bool
};

const enhance = compose(
	connect(store => ({
		isAuthed: selectIsAuthed(store)
	}))
);

export default enhance(Header);
