import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Avatar from "@components/Avatar";
import Text from "@components/Text";
import UserResolver from "@components/@resolvers/User";
import { connect } from "react-redux";
import { compose } from "@utils/compose";
import { selectUserId } from "@store/selectors/user";
import styles from "./styles";

class Author extends React.PureComponent {
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

Author.propTypes = {
	userId: PropTypes.string.isRequired
};

const mapStateToProps = store => ({
	userId: selectUserId(store)
});

const enhance = compose(connect(mapStateToProps));

export default enhance(Author);
