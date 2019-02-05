import React from "react";
import PropTypes from "prop-types";

class Text extends React.PureComponent {
	render = () => {
		const { as, ...rest } = this.props;

		return React.createElement(as, rest);
	};
}

Text.propTypes = {
	children: PropTypes.any.isRequired,
	as: PropTypes.any
};

Text.defaultProps = {
	as: "p"
};

export default Text;
