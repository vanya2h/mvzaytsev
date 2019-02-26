import React from "react";
import PropTypes from "prop-types";
import generateColor from "string-to-color";
import { hexToRgbA } from "@utils/hexToRgba";
import Avatar from "@components/Avatar";
import moment from "moment";
import Text from "@components/Text";
import styles from "./styles";

class UserSmallCard extends React.PureComponent {
	render = () => {
		const { user } = this.props;
		const color = generateColor(user.name);

		return (
			<div
				style={{
					backgroundImage: `linear-gradient(to bottom, ${hexToRgbA(
						color,
						0.2
					)}, transparent)`
				}}
				className={styles.card}
			>
				<div className={styles.image}>
					<Avatar color={color} name={user.name} size={50} />
				</div>
				<Text relaxed>
					<React.Fragment>
						<b>{user.name}</b>
						<small>{moment(user.createdAt).format("LL")}</small>
						<small>{user.isAdmin ? "Админ" : "Пользователь"}</small>
					</React.Fragment>
				</Text>
			</div>
		);
	};
}

UserSmallCard.propTypes = {
	user: PropTypes.object
};

UserSmallCard.defaultProps = {
	user: null
};

export default UserSmallCard;
