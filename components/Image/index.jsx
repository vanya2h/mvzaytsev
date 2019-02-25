import React from "react";
import ImageZoom from "react-medium-image-zoom";
import { createS3URL } from "@utils/createS3URL";
import PropTypes from "prop-types";

class Image extends React.PureComponent {
	render = () => {
		const {
			attachmentKey,
			title,
			previewStyle,
			zoomStyle,
			...rest
		} = this.props;

		return (
			<ImageZoom
				image={{
					src: createS3URL(attachmentKey),
					alt: title,
					style: previewStyle
				}}
				zoomImage={{
					src: createS3URL(attachmentKey),
					alt: title,
					style: zoomStyle
				}}
				{...rest}
			/>
		);
	};
}

Image.propTypes = {
	attachmentKey: PropTypes.string.isRequired,
	title: PropTypes.string
};

Image.defaultProps = {
	title: "Изображение",
	previewStyle: {},
	zoomStyle: {}
};

export default Image;
