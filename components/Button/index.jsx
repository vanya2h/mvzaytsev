import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";
import styles from "./styles";

class Button extends React.PureComponent {
	render = () => {
		const { className, loading, primary, icon, children, ...rest } = this.props;

		return (
			<button
				className={cl(
					styles.button,
					className,
					{ [styles.loading]: loading },
					{ [styles.primary]: primary }
				)}
				{...rest}
			>
				{icon && <span className={styles.icon}>{icon}</span>}
				{children}
			</button>
		);
	};
}

Button.propTypes = {
	className: PropTypes.string,
	loading: PropTypes.bool,
	children: PropTypes.any,
	primary: PropTypes.bool
};

Button.defaultProps = {
	className: null,
	primary: false,
	loading: null
};

export default Button;
