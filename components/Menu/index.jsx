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

export class MenuItem extends React.Component {
	render = () => {
		const { children, link, active, className, icon, ...rest } = this.props;

		return (
			<li
				className={cl({ [styles.active]: active }, styles.item, className, {
					[styles.clickable]: rest.onClick
				})}
				{...rest}
			>
				{icon && <span className={styles.icon}>{icon}</span>}
				{link ? (
					<Link href={link}>
						<a>{children}</a>
					</Link>
				) : (
					children
				)}
			</li>
		);
	};
}

MenuItem.propTypes = {
	icon: PropTypes.element
};

MenuItem.defaultProps = {
	icon: null
};
