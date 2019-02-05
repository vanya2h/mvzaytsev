import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";
import styles from "./styles";

export const Loader = ({ centered }) => (
	<div className={cl(styles.ldsEllipsis, { ["centered"]: centered })}>
		<div />
		<div />
		<div />
		<div />
	</div>
);

Loader.propTypes = {
	centered: PropTypes.bool
};

Loader.defaultProps = {
	centered: true
};

export default Loader;
