import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "@utils/compose";
import * as userSelectors from "@store/selectors/user";
import UserResolver from "@components/@resolvers/User";
import { Menu, MenuItem } from "@components/Menu";
import { userLogout } from "@store/actions/user";
import Avatar from "@components/Avatar";
import Text from "@components/Text";
import styles from "./styles";

class Profile extends React.PureComponent {
	render = () => {
		const { logout, isAdmin, userId } = this.props;

		return (
			<React.Fragment>
				<div className="mb2">
					<UserResolver user={userId}>
						{user => (
							<div className="flex flex-row items-center">
								<Avatar size="40px" name={user.name} />
								<div className="ml2">
									<Text className={styles.name}>
										<b>{user.name}</b>
									</Text>
									<Text className={styles.desc}>
										<small>{user.isAdmin ? "Админ" : "Пользователь"}</small>
									</Text>
								</div>
							</div>
						)}
					</UserResolver>
				</div>
				<Text className="p0 m0">
					Хэй-хэй, кажется ты снова решил к нам заглянуть,{" "}
					<UserResolver user={userId}>
						{user => <span>{user.name}</span>}
					</UserResolver>{" "}
					😋
				</Text>
				<div className="mt2">
					<Menu horizontal>
						{isAdmin && <MenuItem link="/admin">Админка</MenuItem>}
						<MenuItem link="/">На главную</MenuItem>
						<MenuItem onClick={logout}>
							<a>Выйти из аккаунта</a>
						</MenuItem>
					</Menu>
				</div>
			</React.Fragment>
		);
	};
}

Profile.propTypes = {
	logout: PropTypes.func.isRequired,
	isAdmin: PropTypes.bool.isRequired,
	userId: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(userLogout())
});

const enhance = compose(
	connect(
		store => ({
			userId: userSelectors.selectUserId(store),
			isAdmin: userSelectors.selectUserField(store, {
				field: "isAdmin"
			})
		}),
		mapDispatchToProps
	)
);

export default enhance(Profile);
