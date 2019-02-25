import React from "react";
import cl from "classnames";
import Link from "next/link";
import moment from "moment";
import Text from "@components/Text";
import PropTypes from "prop-types";
import { resolveEntityId } from "@utils/resolveEntityId";
import styles from "./styles";

class PostPreview extends React.PureComponent {
	render = () => {
		const { post, active } = this.props;

		return (
			<div className={styles.preview}>
				<Link href={`/blog/${resolveEntityId(post)}`}>
					<a className={cl({ [styles.active]: active })}>{post.title}</a>
				</Link>
				<Text relaxed>
					<small>{moment(post.createdAt).format("LL")}</small>
				</Text>
			</div>
		);
	};
}

PostPreview.propTypes = {
	post: PropTypes.object,
	active: PropTypes.bool
};

PostPreview.defaultProps = {
	post: null,
	active: false
};

export default PostPreview;
