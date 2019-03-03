import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

class Container extends React.PureComponent {
	render = () => <div className={styles.container}>{this.props.children}</div>;
}

Container.propTypes = {
	children: PropTypes.any.isRequired
};

export default Container;
