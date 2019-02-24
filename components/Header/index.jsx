import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "@utils/compose";
import { selectIsAuthed } from "@store/selectors/user";
import Menu from "./components/Menu";
import User from "./components/User";
import Clock from "./components/Clock";

class Header extends React.PureComponent {
	render = () => {
		const { isAuthed } = this.props;

		return (
			<div className="flex justify-between content-center">
				<div>
					<Menu />
				</div>
				<div className="flex flex-row items-center">
					<div>
						<Clock />
					</div>
					{isAuthed && (
						<div className="ml2">
							<User />
						</div>
					)}
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
