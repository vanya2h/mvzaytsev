import React from "react";
import cl from "classnames";
import Menu from "./components/Menu";
import Clock from "./components/Clock";
import styles from "./styles";

class Header extends React.PureComponent {
	render = () => {
		return (
			<div className={cl("flex", "justify-between", "content-center")}>
				<div className={styles.menu}>
					<Menu />
				</div>
				<div className={styles.clock}>
					<Clock />
				</div>
			</div>
		);
	};
}

export default Header;
