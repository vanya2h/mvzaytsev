import React from "react";
import cl from "classnames";
import PropTypes from "prop-types";
import styles from "./styles";

class Input extends React.PureComponent {
	handleChange = e => {
		console.log(e.target.value);
		const value = e.target.value;
		const { onChange } = this.props;

		return onChange(value);
	};

	render = () => {
		const {
			value,
			hasError,
			placeholder,
			type,
			className,
			fluid,
			...rest
		} = this.props;

		return (
			<input
				{...rest}
				className={cl(
					"form",
					styles.input,
					{ ["error"]: hasError },
					className,
					{ [styles.fluid]: fluid }
				)}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={this.handleChange}
			/>
		);
	};
}

Input.propTypes = {
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	hasError: PropTypes.bool,
	fluid: PropTypes.bool,
	value: PropTypes.string
};

Input.defaultProps = {
	type: "text",
	fluid: false,
	className: null,
	placeholder: null,
	hasError: false
};

export default Input;
