import React from "react";
import Heading from "@components/Heading";
import Text from "@components/Text";
import styles from "./styles";

class Attachment extends React.PureComponent {
	render = () => {
		const { title, url, type, download, description } = this.props;

		return (
			<div className={styles.attachment}>
				<small>Тип документа: {type}</small>
				<Heading size={5}>
					<a href={url} download={download ? "true" : "false"}>
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

Attachment.defaultProps = {
	download: true
};

export default Attachment;
