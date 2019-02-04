import React from "react";
import PropTypes from "prop-types";
import { compose } from "@utils/compose";
import { withThemeContext } from "@providers/theme";
import Eye from "react-feather/dist/icons/eye";
import { Menu as MenuComponent, MenuItem } from "@components/Menu";
import styles from "./styles";

class Menu extends React.Component {
	render = () => {
		const { textSize, blindness, handleTextSize, handleBlindness } = this.props;

		return (
			<MenuComponent horizontal>
				{!blindness && (
					<React.Fragment>
						<MenuItem
							active={textSize === "normal"}
							onClick={() => handleTextSize("normal")}
							className={styles.normal}
						>
							A
						</MenuItem>
						<MenuItem
							active={textSize === "extra"}
							onClick={() => handleTextSize("extra")}
							className={styles.extra}
						>
							A
						</MenuItem>
					</React.Fragment>
				)}
				<MenuItem
					icon={<Eye size={15} />}
					onClick={() => handleBlindness(!blindness)}
				>
					{blindness ? "Обычная версия" : "Для слабовидящих"}
				</MenuItem>
			</MenuComponent>
		);
	};
}

Menu.propTypes = {
	textSize: PropTypes.string.isRequired,
	blindness: PropTypes.bool.isRequired,
	handleTextSize: PropTypes.func.isRequired,
	handleBlindness: PropTypes.func.isRequired
};

const enhance = compose(
	withThemeContext(context => ({
		textSize: context.textSize,
		blindness: context.blindness,
		handleTextSize: context.handleTextSize,
		handleBlindness: context.handleBlindness
	}))
);

export default enhance(Menu);
