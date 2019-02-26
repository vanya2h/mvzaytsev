import React from "react";
import PropTypes from "prop-types";
import { MODEL_USER } from "@consts/_models";
import * as entityList from "@providers/entityList";
import Alert from "@components/Alert";
import UserResolver from "@components/@resolvers/User";
import { compose } from "@utils/compose";
import Heading from "@components/Heading";
import Button from "@components/Button";
import Text from "@components/Text";
import Loader from "@components/Loader";
import UserSmallCard from "@components/@views/User/UserSmallCard";
import { createLoadMoreFunction } from "./creators";
import styles from "./styles";

class Users extends React.PureComponent {
	render = () => {
		const { isHydrating, isOverflowed, userIds, loadMore, error } = this.props;

		if (error) {
			return (
				<Alert error>
					<React.Fragment>
						<Heading size={4}>Ошибка</Heading>
						<Text relaxed>{error.message}</Text>
					</React.Fragment>
				</Alert>
			);
		}

		if (!userIds) {
			return (
				<div className={styles.centered}>
					<Loader />
				</div>
			);
		}

		if (userIds.length === 0) {
			return (
				<Alert warning>
					<React.Fragment>
						<Heading size={4}>Не найдено</Heading>
						<Text relaxed>Ни один пользовать в системе не найден</Text>
					</React.Fragment>
				</Alert>
			);
		}

		return (
			<React.Fragment>
				<div className={styles.users}>
					{userIds.map(userId => (
						<UserResolver user={userId} key={userId}>
							{user => <UserSmallCard user={user} />}
						</UserResolver>
					))}
				</div>
				{!isOverflowed && (
					<div className={styles.loadMore}>
						<Button loading={isHydrating} onClick={loadMore}>
							Загрузить ещё
						</Button>
					</div>
				)}
			</React.Fragment>
		);
	};
}

Users.propTypes = {
	isHydrating: PropTypes.bool.isRequired,
	isOverflowed: PropTypes.bool.isRequired,
	userIds: PropTypes.array,
	loadMore: PropTypes.func.isRequired,
	error: PropTypes.any
};

Users.defaultProps = {
	error: null
};

const enhance = compose(
	entityList.withEntityListProvider(() => ({
		loadMore: createLoadMoreFunction(),
		id: "users-overview",
		model: MODEL_USER
	})),
	entityList.withEntityListContext(context => ({
		isHydrating: context.isHydrating,
		isOverflowed: context.isOverflowed,
		userIds: context.entityIds,
		loadMore: context.loadMore,
		error: context.error
	}))
);

export default enhance(Users);
