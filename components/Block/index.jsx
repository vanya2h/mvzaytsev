import React from "react";
import PropTypes from "prop-types";
import Heading from "@components/Heading";
import styles from "./styles";

class Block extends React.PureComponent {
	render = () => {
		const { title, children, icon } = this.props;

		return (
			<div className={styles.block}>
				<div className={styles.title}>
					{icon && <span className={styles.icon}>{icon}</span>}
					<Heading className={styles.text} size={4}>
						{title}
					</Heading>
				</div>
				<div className={styles.content}>{children}</div>
			</div>
		);
	};
}

Block.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	icon: PropTypes.element
};

Block.defaultProps = {
	icon: null
};

export default Block;
