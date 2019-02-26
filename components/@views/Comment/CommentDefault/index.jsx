import React from "react";
import moment from "moment";
import IconPen from "react-feather/dist/icons/edit-2";
import { resolveEntityId } from "@utils/resolveEntityId";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "@components/Modal";
import UpdateComment from "@components/@forms/UpdateComment";
import UserResolver from "@components/@resolvers/User";
import { compose } from "@utils/compose";
import Avatar from "@components/Avatar";
import { selectUserField } from "@store/selectors/user";
import Text from "@components/Text";
import styles from "./styles";

class CommentDefault extends React.PureComponent {
	state = {
		isEditing: false
	};

	handleEdit = isEditing => {
		this.setState({
			isEditing
		});
	};

	render = () => {
		const { comment, isAdmin } = this.props;
		const { isEditing } = this.state;

		if (!comment) return null;

		return (
			<React.Fragment>
				<Modal open={isEditing} onClose={() => this.handleEdit(false)}>
					<UpdateComment commentId={resolveEntityId(comment)} />
				</Modal>
				<div className="flex flex-row">
					<div className={styles.avatar}>
						<UserResolver user={comment.owner}>
							{user => <Avatar name={user.name} size={35} />}
						</UserResolver>
					</div>
					<div className="grow-1 ml2">
						<div className="flex justify-between items-center">
							<div className="grow-1">
								<UserResolver user={comment.owner}>
									{user => <b>{user.name}</b>}
								</UserResolver>
								<small className="ml1">
									{moment(comment.fakeCreated || comment.createdAt).format(
										"LL"
									)}
								</small>
							</div>
							{isAdmin && (
								<button
									className={styles.editButton}
									onClick={() => this.handleEdit(true)}
								>
									<IconPen size={16} />
								</button>
							)}
						</div>

						<Text relaxed>{comment.content}</Text>
					</div>
				</div>
			</React.Fragment>
		);
	};
}

CommentDefault.propTypes = {
	comment: PropTypes.object,
	isAdmin: PropTypes.bool.isRequired
};

CommentDefault.defaultProps = {
	comment: null
};

const enhance = compose(
	connect(store => ({
		isAdmin: selectUserField(store, {
			field: "isAdmin"
		})
	}))
);

export default enhance(CommentDefault);
