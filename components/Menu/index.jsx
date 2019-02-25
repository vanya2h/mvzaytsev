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
	horizontal: false,
	sub: null
};

export default Menu;

export class MenuItem extends React.Component {
	state = {
		open: false
	};

	handleOpen = open => {
		this.setState({
			open
		});
	};

	handleClick = () => {
		const { open } = this.state;
		const { sub, onClick } = this.props;

		if (onClick) {
			onClick();
			return;
		}

		if (sub) {
			this.handleOpen(!open);
		}
	};

	render = () => {
		const {
			children,
			link,
			active,
			className,
			icon,
			sub,
			...rest
		} = this.props;

		const { open } = this.state;

		return (
			<li
				{...rest}
				className={cl({ [styles.active]: active }, styles.item, className, {
					[styles.clickable]: rest.onClick
				})}
				onClick={this.handleClick}
			>
				{icon && <span className={styles.icon}>{icon}</span>}
				{link ? (
					<Link href={link}>
						<a>
							<span>{children}</span>
						</a>
					</Link>
				) : (
					<span className={styles.area}>
						<span className={styles.trigger}>
							<a>
								<span className={styles.children}>{children}</span>
							</a>
						</span>
						{sub && open && <span className={styles.sub}>{sub}</span>}
					</span>
				)}
			</li>
		);
	};
}

MenuItem.propTypes = {
	icon: PropTypes.element,
	sub: PropTypes.any
};

MenuItem.defaultProps = {
	icon: null
};
