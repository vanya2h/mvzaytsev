import React from "react";
import styles from "./styles";

class PostSkeleton extends React.PureComponent {
	render = () => {
		return (
			<div className={styles.skeleton}>
				<div className={styles.title} />
				<div className={styles.meta} />
			</div>
		);
	};
}

export default PostSkeleton;
