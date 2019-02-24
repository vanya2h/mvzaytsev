import React from "react";
import PropTypes from "prop-types";
import { MODEL_USER } from "@consts/_models";
import { compose } from "@utils/compose";
import { axios } from "@utils/axios";
import { resolveEntityId } from "@utils/resolveEntityId";
import { withEntity } from "@HOC/utils/withEntity";

class UserResolver extends React.PureComponent {
	render = () => {
		const { user, children } = this.props;

		if (!user) {
			return null;
		}

		return children(user);
	};
}

UserResolver.propTypes = {
	user: PropTypes.object,
	children: PropTypes.func.isRequired
};

const mapEntityContext = user => ({
	user
});

const mapPropsToOptions = props => ({
	entity: props.user,
	model: MODEL_USER,
	loadEntity: axios.get("/user/entry", {
		params: {
			userId: resolveEntityId(props.user)
		}
	})
});

const enhance = compose(withEntity(mapPropsToOptions)(mapEntityContext));

export default enhance(UserResolver);
