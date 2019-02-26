import React from "react";
import cl from "classnames";
import Analytics from "./components/Analytics";
import Text from "@components/Text";
import Heading from "@components/Heading";
import Users from "./components/Users";
import styles from "./styles";

class SystemOverview extends React.PureComponent {
	render = () => {
		return (
			<React.Fragment>
				<div className={cl(styles.block)}>
					<Analytics />
				</div>
				<div className="mt3">
					<Heading size={3}>Пользователи</Heading>
					<Text relaxed>Полный список пользователей сайта</Text>
					<div className="mt2">
						<Users />
					</div>
				</div>
			</React.Fragment>
		);
	};
}

export default SystemOverview;
