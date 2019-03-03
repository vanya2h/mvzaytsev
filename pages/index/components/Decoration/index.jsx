import React from "react";
import cl from "classnames";
import PropTypes from "prop-types";
import styles from "./styles";

class Decoration extends React.PureComponent {
	render = () => {
		const { fill, size, className, style } = this.props;

		return (
			<div
				style={{
					width: size,
					height: size,
					...style
				}}
			>
				<svg viewBox="0 0 164 170" className={cl(styles.svg, className)}>
					<path
						d="M155.818 7.703C149.108.733 149.418 0 139.759 0c-9.658 0-9.658 9.09-19.315 9.09-9.658 0-9.658-9.09-19.318-9.09-9.658 0-9.658 9.09-19.317 9.09-9.66 0-9.66-9.09-19.319-9.09-9.659 0-9.659 9.09-19.318 9.09-9.66 0-9.66-9.09-19.32-9.09S14.5.733 7.788 7.704C.84 14.918 0 14.578 0 24.61c0 10.032 9.06 10.032 9.06 20.063C9.06 54.707 0 54.707 0 64.74s9.06 10.033 9.06 20.066S0 94.839 0 104.873c0 10.033 9.06 10.033 9.06 20.066 0 10.035-9.06 10.035-9.06 20.069 0 10.035.841 9.694 7.79 16.911 6.709 6.971 6.4 7.704 16.058 7.704 9.657 0 9.657-9.091 19.315-9.091 9.659 0 9.659 9.09 19.317 9.09 9.66 0 9.66-9.09 19.318-9.09 9.66 0 9.66 9.09 19.319 9.09 9.66 0 9.66-9.09 19.318-9.09 9.66 0 9.66 9.09 19.32 9.09 9.661 0 9.351-.732 16.063-7.703 6.948-7.216 7.789-6.875 7.789-16.907s-9.06-10.032-9.06-20.064 9.06-10.032 9.06-20.065c0-10.033-9.06-10.033-9.06-20.066s9.06-10.033 9.06-20.067c0-10.033-9.06-10.033-9.06-20.066 0-10.035 7.791-9.551 9.025-19.509 1.115-8.993-.806-10.254-7.754-17.472"
						fill={fill}
						fillRule="evenodd"
					/>
				</svg>
			</div>
		);
	};
}

Decoration.propTypes = {
	size: PropTypes.any,
	style: PropTypes.object,
	fill: PropTypes.string,
	className: PropTypes.string
};

Decoration.defaultProps = {
	size: "50px",
	className: null,
	fill: "#c0c0c0",
	style: {}
};

export default Decoration;
