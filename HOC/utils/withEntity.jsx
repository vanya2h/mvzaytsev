import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "@utils/compose";
import { resolveEntityId } from "@utils/resolveEntityId";
import { isFunction } from "@utils/isFunction";
import { insertInCollections } from "@store/actions/collections";
import { selectEntity } from "@store/selectors/collections";
import { withPropsTransformer } from "./withPropsTransformer.jsx";

export const withEntity = propsToOptionsMapper => mapEntityToProps => Enhanceable => {
	class ComponentWithEntity extends React.PureComponent {
		componentDidMount = () => {
			const { resolvedEntity, insertInCollections, loadEntity } = this.props;

			if (typeof entity === "string") {
				if (!resolvedEntity && isFunction(loadEntity)) {
					return this.loadEntity();
				}
			}

			if (typeof entity === "object") {
				if (resolvedEntity) {
					return insertInCollections(resolvedEntity);
				}
				return this.loadEntity();
			}
		};

		loadEntity = async () => {
			const { insertInCollections, loadEntity } = this.props;
			const response = await loadEntity();

			await insertInCollections(response.data);
		};

		render = () => {
			const { entity, resolvedEntity, ...rest } = this.props;

			if (!entity || !resolvedEntity) {
				return null;
			}

			return <Enhanceable {...rest} {...mapEntityToProps(resolvedEntity)} />;
		};
	}

	ComponentWithEntity.propTypes = {
		insertInCollections: PropTypes.func.isRequired,
		resolvedEntity: PropTypes.object,
		model: PropTypes.string.isRequired,
		loadEntity: PropTypes.func.isRequired,
		entity: PropTypes.any
	};

	ComponentWithEntity.defaultProps = {
		resolvedEntity: null,
		entity: null
	};

	const mapStoreToProps = (store, props) => ({
		resolvedEntity: selectEntity(store, {
			id: resolveEntityId(props.entity),
			model: props.model
		})
	});

	const mapDispatchToProps = (dispatch, props) => ({
		insertInCollections: entity =>
			dispatch(insertInCollections(props.model, [entity]))
	});

	const enhance = compose(
		withPropsTransformer(propsToOptionsMapper),
		connect(
			mapStoreToProps,
			mapDispatchToProps
		)
	);

	return enhance(ComponentWithEntity);
};

export default withEntity;
