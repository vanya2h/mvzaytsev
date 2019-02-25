import React from "react";
import PropTypes from "prop-types";
import compose from "@utils/compose";
import { MODEL_COMMENT } from "@consts/_models";
import Text from "@components/Text";
import Heading from "@components/Heading";
import Alert from "@components/Alert";
import * as entityList from "@providers/entityList";
import CommentDefault from "@components/@views/Comment/CommentDefault";
import CommentResolver from "@components/@resolvers/Comment";
import CreateComment from "@components/@forms/CreateComment";
import styles from "./styles";
import { createLoadMoreFunction } from "./creators";

class CommentList extends React.Component {
	handleCreate = comment => {
		const { appendItems } = this.props;

		appendItems([comment]);
	};

	render = () => {
		const {
			commentIds,
			loadMore,
			isHydrating,
			isOverflowed,
			postId,
			error
		} = this.props;

		if (error) {
			return (
				<Alert error>
					<Text>
						😑 В данный момент не удаётся загрузить комментарии к данной записи.
						Попробуйте позже
					</Text>
				</Alert>
			);
		}

		if (!commentIds) {
			return (
				<div className={styles.loader}>
					<Text>Комментарии загружаются..</Text>
				</div>
			);
		}

		if (commentIds.length === 0) {
			return (
				<Alert warn>
					<Heading size={5}>Комментариев нет</Heading>
					<div className="mt1">
						<Text relaxed>
							😑 К сожалению, комментариев пока ещё нет. Вы можете стать первым
							участником дискуссии
						</Text>
					</div>
					<div className="mt2">
						<CreateComment
							onCreate={this.handleCreate}
							key={postId}
							postId={postId}
						/>
					</div>
				</Alert>
			);
		}

		return (
			<div className="flex flex-column">
				<div className="mb2">
					<Heading size={6} className="wide-heading">
						Комментарии к посту
					</Heading>
				</div>
				{commentIds.map((commentId, index) => (
					<div key={index} className={styles.item}>
						<CommentResolver comment={commentId}>
							{comment => <CommentDefault comment={comment} />}
						</CommentResolver>
					</div>
				))}
				{!isOverflowed && (
					<div className="mt2">
						{!isHydrating ? (
							<a onClick={loadMore}>Загрузить ещё</a>
						) : (
							<span>Подождите..</span>
						)}
					</div>
				)}

				<div className="mt2">
					<CreateComment
						onCreate={this.handleCreate}
						key={postId}
						postId={postId}
					/>
				</div>
			</div>
		);
	};
}

CommentList.propTypes = {
	loadMore: PropTypes.func.isRequired,
	isHydrating: PropTypes.bool.isRequired,
	error: PropTypes.object,
	postId: PropTypes.string.isRequired,
	isOverflowed: PropTypes.bool.isRequired,
	appendItems: PropTypes.func.isRequired,
	commentIds: PropTypes.array
};

CommentList.defaultProps = {
	error: null,
	commentIds: null
};

const enhance = compose(
	entityList.withEntityListProvider(props => ({
		loadMore: createLoadMoreFunction(props.postId),
		id: `comments-${props.postId}`,
		model: MODEL_COMMENT
	})),
	entityList.withEntityListContext(context => ({
		isHydrating: context.isHydrating,
		isOverflowed: context.isOverflowed,
		commentIds: context.entityIds,
		appendItems: context.appendItems,
		loadMore: context.loadMore,
		error: context.error
	}))
);

export default enhance(CommentList);
