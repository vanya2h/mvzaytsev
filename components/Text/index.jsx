import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";
import styles from "./styles";

class Text extends React.PureComponent {
	render = () => {
		const { as, bold, className, ...rest } = this.props;

		return React.createElement(as, {
			...rest,
			className: cl(className, { [styles.bold]: bold })
		});
	};
}

Text.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	bold: PropTypes.bool,
	as: PropTypes.any
};

Text.defaultProps = {
	as: "p",
	className: null,
	bold: false
};

export default Text;
