import React from "react";
import Link from "next/link";

class LoginButton extends React.PureComponent {
	render = () => {
		return (
			<Link href="/auth">
				<a>Уже зарегистрированы?</a>
			</Link>
		);
	};
}

export default LoginButton;
