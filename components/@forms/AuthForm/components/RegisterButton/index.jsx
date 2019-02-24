import React from "react";
import Link from "next/link";

class RegisterButton extends React.PureComponent {
	render = () => {
		return (
			<Link href="/register">
				<a>Регистрация</a>
			</Link>
		);
	};
}

export default RegisterButton;
