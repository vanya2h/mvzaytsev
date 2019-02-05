import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

class Blog extends React.PureComponent {
	render = () => {
		return <div className={styles.blog}>Myblog</div>;
	};
}

export default Blog;
