import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";
import styles from "./styles";

class Text extends React.PureComponent {
	render = () => {
		const { as, bold, className, relaxed, ...rest } = this.props;

		return React.createElement(as, {
			...rest,
			className: cl(
				className,
				{ [styles.bold]: bold },
				{ [styles.relaxed]: relaxed }
			)
		});
	};
}

Text.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	bold: PropTypes.bool,
	relaxed: PropTypes.bool,
	as: PropTypes.any
};

Text.defaultProps = {
	as: "p",
	relaxed: false,
	className: null,
	bold: false
};

export default Text;
