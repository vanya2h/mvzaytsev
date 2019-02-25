import React from "react";
import cl from "classnames";
import PropTypes from "prop-types";
import styles from "./styles";

class TextArea extends React.PureComponent {
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
			className,
			fluid,
			...rest
		} = this.props;

		return (
			<textarea
				{...rest}
				className={cl(
					"form",
					styles.input,
					{ ["error"]: hasError },
					className,
					{ [styles.fluid]: fluid }
				)}
				value={value}
				placeholder={placeholder}
				onChange={this.handleChange}
			/>
		);
	};
}

TextArea.propTypes = {
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	hasError: PropTypes.bool,
	fluid: PropTypes.bool,
	value: PropTypes.string
};

TextArea.defaultProps = {
	fluid: false,
	className: null,
	placeholder: null,
	hasError: false
};

export default TextArea;
