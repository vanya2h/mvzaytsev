import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import cl from "classnames";
import styles from "./styles";

export class Menu extends React.Component {
	render = () => {
		const { horizontal, children, className, ...rest } = this.props;

		return (
			<ul
				className={cl("list-reset", { [className]: className }, styles.menu, {
					[styles.horizontal]: horizontal
				})}
				{...rest}
			>
				<React.Fragment>{children}</React.Fragment>
			</ul>
		);
	};
}

Menu.propTypes = {
	horizontal: PropTypes.bool,
	children: PropTypes.any.isRequired
};

Menu.defaultProps = {
	horizontal: false
};

export default Menu;

class MenuItemClass extends React.Component {
	render = () => {
		const { children, active, className, icon, ...rest } = this.props;

		return (
			<li
				className={cl({ [styles.active]: active }, styles.item, className, {
					[styles.clickable]: rest.onClick
				})}
				{...rest}
			>
				{icon && <span className={styles.icon}>{icon}</span>}
				{children}
			</li>
		);
	};
}

MenuItemClass.propTypes = {
	icon: PropTypes.element
};

MenuItemClass.defaultProps = {
	icon: null
};

export const MenuItem = props => {
	if (props.link) {
		return (
			<Link href={props.link}>
				<a>
					<MenuItemClass {...props} />
				</a>
			</Link>
		);
	}

	return <MenuItemClass {...props} />;
};
