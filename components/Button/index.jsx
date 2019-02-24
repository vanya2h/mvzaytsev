import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";
import styles from "./styles";

class Button extends React.PureComponent {
	render = () => {
		const {
			className,
			disabled,
			loading,
			primary,
			icon,
			children,
			...rest
		} = this.props;

		return (
			<button
				disabled={disabled || loading}
				className={cl(
					styles.button,
					className,
					{ [styles.loading]: loading },
					{ [styles.primary]: primary },
					{ [styles.disabled]: disabled }
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
	primary: PropTypes.bool,
	disabled: PropTypes.bool
};

Button.defaultProps = {
	className: null,
	primary: false,
	disabled: false,
	loading: false
};

export default Button;
