import React from "react";
import PropTypes from "prop-types";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import { Menu, MenuItem } from "@components/Menu";
import { selectUserField } from "@store/selectors/user";
import { userLogout } from "@store/actions/user";
import { connect } from "react-redux";

const Hello = ({ logout, name }) => (
	<React.Fragment>
		<Text className="p0 m0">
			Хэй-хэй, кажется ты снова решил к нам заглянуть, {name} 😋
		</Text>
		<div className="mt2">
			<Menu horizontal>
				<MenuItem link="/admin">Админка</MenuItem>
				<MenuItem link="/">На главную</MenuItem>
				<MenuItem onClick={logout}>
					<a>Выйти из аккаунта</a>
				</MenuItem>
			</Menu>
		</div>
	</React.Fragment>
);

Hello.propTypes = {
	logout: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired
};

const mapStoreToProps = store => ({
	name: selectUserField(store, {
		field: "name"
	})
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(userLogout())
});

const enhance = compose(
	connect(
		mapStoreToProps,
		mapDispatchToProps
	)
);

export default enhance(Hello);
