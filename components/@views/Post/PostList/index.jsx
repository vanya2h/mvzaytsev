import React from "react";
import cl from "classnames";
import Link from "next/link";
import Truncate from "react-truncate";
import LikeIcon from "react-feather/dist/icons/heart";
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
				<div className={styles.title}>
					<div className={styles.text}>
						<Link href={`/blog/${resolveEntityId(post)}`}>
							<a className={cl({ [styles.active]: active })}>
								<Truncate lines={2} ellipsis={<span>...</span>}>
									{post.title}
								</Truncate>
							</a>
						</Link>
						<Text relaxed>
							<small>{moment(post.createdAt).format("LL")}</small>
						</Text>
					</div>
					<div className={styles.likes}>
						<LikeIcon size={15} className={styles.icon} />
						<span>{post.likes.length}</span>
					</div>
				</div>
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
