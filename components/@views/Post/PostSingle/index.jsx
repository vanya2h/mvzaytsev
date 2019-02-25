import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import UserIcon from "react-feather/dist/icons/user";
import TimeIcon from "react-feather/dist/icons/clock";
import AttachmentResolver from "@components/@resolvers/Attachment";
import TextRenderer from "@components/TextRenderer";
// import Text from "@components/Text";
import { Menu, MenuItem } from "@components/Menu";
import Heading from "@components/Heading";
import Image from "@components/Image";
import styles from "./styles";

class PostSingle extends React.PureComponent {
	render = () => {
		const { post } = this.props;

		if (!post) return null;

		return (
			<div className={styles.single}>
				<div className={styles.image}>
					<AttachmentResolver attachment={post.image}>
						{attachment => (
							<Image
								previewStyle={{
									width: "100%"
								}}
								attachmentKey={attachment.key}
								title={post.title}
							/>
						)}
					</AttachmentResolver>
				</div>
				<div className="mt2">
					<div className={styles.author}>
						<Heading size={3}>{post.title}</Heading>
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
					<div className="mt3">
						<TextRenderer content={post.content} />
					</div>
				</div>
			</div>
		);
	};
}

PostSingle.propTypes = {
	post: PropTypes.object
};

PostSingle.defaultProps = {
	post: null
};

export default PostSingle;
