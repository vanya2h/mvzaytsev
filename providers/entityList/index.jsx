import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as listSelectors from "@store/selectors/lists";
import { listsInsertItems } from "@store/actions/lists";
import { parseError } from "@utils/parseError";
import { resolveEntityId } from "@utils/resolveEntityId";
import { compose } from "@utils/compose";
import { collectionsInsert } from "@store/actions/collections";
import { withAsyncSetState } from "@HOC/utils/withAsyncSetState";

export const entityListContext = React.createContext();

class EntityListProviderClass extends React.PureComponent {
	state = {
		isHydrating: false,
		error: null
	};

	componentDidMount = () => {
		const { autoLoad, isOverflowed } = this.props;

		if (autoLoad && !isOverflowed) {
			this.loadMore();
		}
	};

	appendItems = async (itemIds, last) => {
		const { insertInList } = this.props;

		await insertInList(itemIds, last);

		return Promise.resolve(this.state.entityIds);
	};

	// removeItems = async itemIds => {
	// 	await this.asyncSetState(state => ({
	// 		entityIds: state.entityIds.filter(id => itemIds.indexOf(id) !== -1)
	// 	}));

	// 	return Promise.resolve(this.state.entityIds);
	// };

	loadMore = async () => {
		const { loadMore, collectionsInsert, perPage, entityIds } = this.props;

		try {
			await this.asyncSetState({
				error: null,
				isHydrating: true,
				isOverflowed: false
			});

			const loaded = (entityIds && entityIds.length) || 0;
			const response = await loadMore(loaded);

			await collectionsInsert(response.data);

			await this.appendItems(
				response.data.map(resolveEntityId),
				response.data.length < perPage
			);

			await this.asyncSetState({
				isHydrating: false
			});

			return Promise.resolve(response.data);
		} catch (reason) {
			const error = parseError(reason);

			await this.asyncSetState({
				isHydrating: false,
				error
			});

			return Promise.reject(reason);
		}
	};

	render = () => (
		<entityListContext.Provider
			value={{
				...this.state,
				isOverflowed: this.props.isOverflowed,
				loadMore: this.loadMore,
				appendItems: this.appendItems,
				entityIds: this.props.entityIds
				// removeItems: this.removeItems
			}}
		>
			{this.props.children}
		</entityListContext.Provider>
	);
}

EntityListProviderClass.propTypes = {
	loadMore: PropTypes.func.isRequired,
	collectionsInsert: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired,
	perPage: PropTypes.number,
	autoLoad: PropTypes.bool,
	isOverflowed: PropTypes.bool,
	entityIds: PropTypes.array,
	insertInList: PropTypes.func.isRequired
};

EntityListProviderClass.defaultProps = {
	perPage: 10,
	isOverflowed: false,
	entityIds: null,
	autoLoad: true
};

const mapStoreToProps = (store, ownProps) => ({
	entityIds: listSelectors.selectListEntityIds(store, {
		listId: ownProps.id
	}),
	isOverflowed: listSelectors.selectListIsOverflowed(store, {
		listId: ownProps.id
	})
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	collectionsInsert: items =>
		dispatch(collectionsInsert(ownProps.model, items)),
	insertInList: (itemIds, last) =>
		dispatch(listsInsertItems(ownProps.id, itemIds, last))
});

const enhance = compose(
	connect(
		mapStoreToProps,
		mapDispatchToProps
	),
	withAsyncSetState
);

export const EntityListProvider = enhance(EntityListProviderClass);

export const withEntityListProvider = options => Enhanceable => {
	class ComponentWithEntityListProvider extends React.PureComponent {
		render = () => (
			<EntityListProvider {...options(this.props)}>
				<Enhanceable {...this.props} />
			</EntityListProvider>
		);
	}

	return ComponentWithEntityListProvider;
};

export const withEntityListContext = mapContextToProps => Enhanceable => {
	class ComponentWithEntityListContext extends React.PureComponent {
		render = () => (
			<entityListContext.Consumer>
				{context => (
					<Enhanceable {...this.props} {...mapContextToProps(context)} />
				)}
			</entityListContext.Consumer>
		);
	}

	return ComponentWithEntityListContext;
};
