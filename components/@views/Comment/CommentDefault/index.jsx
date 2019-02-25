import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import UserResolver from "@components/@resolvers/User";
import Avatar from "@components/Avatar";
import Text from "@components/Text";
import styles from "./styles";

class CommentDefault extends React.PureComponent {
	render = () => {
		const { comment } = this.props;

		if (!comment) return null;

		return (
			<div className={styles.comment}>
				<div className={styles.avatar}>
					<UserResolver user={comment.owner}>
						{user => <Avatar name={user.name} size={35} />}
					</UserResolver>
				</div>
				<div className={styles.content}>
					<UserResolver user={comment.owner}>
						{user => <b>{user.name}</b>}
					</UserResolver>
					<small className="ml1">
						{moment(comment.createdAt).format("LL")}
					</small>
					<Text relaxed>{comment.content}</Text>
				</div>
			</div>
		);
	};
}

CommentDefault.propTypes = {
	comment: PropTypes.object
};

CommentDefault.defaultProps = {
	comment: null
};

export default CommentDefault;
