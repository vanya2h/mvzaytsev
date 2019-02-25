import React from "react";
import styles from "./styles";

class PostSkeleton extends React.PureComponent {
	render = () => {
		return (
			<div className={styles.skeleton}>
				<div className={styles.image} />
				<div className={styles.title} />
				<div className={styles.meta}>
					<div className={styles.item} />
					<div className={styles.item} />
				</div>
				<div className={styles.content}>
					<div className={styles.item} />
					<div className={styles.item} />
					<div className={styles.item} />
					<div className={styles.item} />
					<div className={styles.item} />
				</div>
			</div>
		);
	};
}

export default PostSkeleton;
