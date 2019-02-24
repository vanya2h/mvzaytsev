import React from "react";
import Avatar from "react-avatar";
import PropTypes from "prop-types";

class AvatarClass extends React.PureComponent {
	render = () => {
		const { name, size, ...rest } = this.props;

		return <Avatar name={name} size={String(size)} {...rest} />;
	};
}

AvatarClass.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.any
};

AvatarClass.defaultProps = {
	size: "30px"
};

export default AvatarClass;
