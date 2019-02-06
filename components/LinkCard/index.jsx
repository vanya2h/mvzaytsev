import React from "react";
import PropTypes from "prop-types";
import Heading from "@components/Heading";
import Text from "@components/Text";
import LinkIcon from "react-feather/dist/icons/link";
import styles from "./styles";

class LinkCard extends React.PureComponent {
	render = () => {
		const { title, url, description } = this.props;

		return (
			<div className={styles.link}>
				<div className={styles.title}>
					<span className={styles.icon}>
						<LinkIcon size={18} />
					</span>
					<span>Ссылка</span>
				</div>
				<Heading size={5}>
					<a href={url} target="_blank" rel="noopener noreferrer">
						{title}
					</a>
				</Heading>
				{description && (
					<Text className={styles.description}>{description}</Text>
				)}
			</div>
		);
	};
}

LinkCard.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string
};

export default LinkCard;
