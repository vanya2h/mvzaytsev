import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";
import styles from "./styles";

const Alert = ({ info, error, warn, success, children }) => {
	return (
		<div
			className={cl(
				styles.alert,
				{ [styles.info]: info },
				{ [styles.error]: error },
				{ [styles.warn]: warn },
				{ [styles.success]: success }
			)}
		>
			{children}
		</div>
	);
};

Alert.propTypes = {
	children: PropTypes.element.isRequired,
	info: PropTypes.bool,
	error: PropTypes.bool,
	warn: PropTypes.bool,
	success: PropTypes.bool
};

Alert.defaultProps = {
	info: false,
	error: false,
	warn: false,
	success: false
};

export default Alert;
