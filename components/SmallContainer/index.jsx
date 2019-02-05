import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

export const SmallContainer = ({ children }) => (
	<div className={styles.smallContainer}>{children}</div>
);

SmallContainer.propTypes = {
	children: PropTypes.element.isRequired
};

export default SmallContainer;
