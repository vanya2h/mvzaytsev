import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Avatar from "@components/Avatar";
import { connect } from "react-redux";
import Text from "@components/Text";
import UserResolver from "@components/@resolvers/User";
import { selectUserId } from "@store/selectors/user";
import { compose } from "@utils/compose";
import styles from "./styles";

class User extends React.Component {
	render = () => {
		const { userId } = this.props;

		return (
			<UserResolver user={userId}>
				{user => (
					<div className="flex flex-row items-center">
						<Avatar size="25px" name={user.name} />
						<div className="ml2">
							<Text className={styles.name}>
								<Link href="/auth">
									<a>
										<b>{user.name}</b>
									</a>
								</Link>
							</Text>
						</div>
					</div>
				)}
			</UserResolver>
		);
	};
}

User.propTypes = {
	userId: PropTypes.string.isRequired
};

const enhance = compose(
	connect(store => ({
		userId: selectUserId(store)
	}))
);

export default enhance(User);
