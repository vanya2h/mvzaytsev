import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { compose } from "@utils/compose";
import UserIcon from "react-feather/dist/icons/user";
import TimeIcon from "react-feather/dist/icons/clock";
import ArrowRight from "react-feather/dist/icons/arrow-right";
import TextRenderer from "@components/TextRenderer";
import { Menu, MenuItem } from "@components/Menu";
import truncateHtml from "truncate-html";
import Heading from "@components/Heading";
import moment from "moment";
import { connect } from "react-redux";
import { selectEntity } from "@store/selectors/collections";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

class Post extends React.PureComponent {
	render = () => {
		const { post } = this.props;

		if (!post) {
			return null;
		}

		return (
			<div className={styles.post}>
				{post.image && (
					<div
						className={styles.image}
						style={{
							backgroundImage: `url(${resolveAttachmentUrl(post.image.url)})`
						}}
					/>
				)}
				<div className={styles.content}>
					<div className={styles.author}>
						<Link
							href={{
								pathname: "/post",
								query: {
									id: post._id
								}
							}}
						>
							<Heading size={3}>
								<a className={styles.link}>{post.title}</a>
							</Heading>
						</Link>
					</div>
					<div className="mt1">
						<Menu horizontal>
							<MenuItem className={styles.meta} icon={<UserIcon size={16} />}>
								Написал: {post.author.name}
							</MenuItem>
							<MenuItem className={styles.meta} icon={<TimeIcon size={16} />}>
								{moment(post.createdAt).format("LL")}
							</MenuItem>
						</Menu>
					</div>
					<TextRenderer content={truncateHtml(post.content, 150)} />
					<div className="mt2">
						<Link
							href={{
								pathname: "/post",
								query: {
									id: post._id
								}
							}}
						>
							<a className={styles.link}>
								<ArrowRight size={17} /> Читать полностью..
							</a>
						</Link>
					</div>
				</div>
			</div>
		);
	};
}

Post.propTypes = {
	post: PropTypes.object
};

const mapStoreToProps = (store, { postId }) => ({
	post: selectEntity(store, {
		model: "Post",
		id: postId
	})
});

const enhance = compose(connect(mapStoreToProps));

export default enhance(Post);
