import React from "react";
import Link from "next/link";
import LoginIcon from "react-feather/dist/icons/log-in";
import styles from "./styles";

class AuthButton extends React.PureComponent {
	render = () => {
		return (
			<div>
				<span className={styles.icon}>
					<LoginIcon size={15} />
				</span>
				<Link href="/auth">
					<a>Войти в систему</a>
				</Link>
			</div>
		);
	};
}

export default AuthButton;
