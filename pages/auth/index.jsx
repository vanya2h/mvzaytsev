import React from "react";
import SmallContainer from "@components/SmallContainer";
import Block from "@components/Block";
import UserIcon from "react-feather/dist/icons/user";
import AuthForm from "./components/AuthForm";
import styles from "./styles";

const AuthPage = () => (
	<div className={styles.authPage}>
		<SmallContainer>
			<Block icon={<UserIcon />} title="Авторизация">
				<AuthForm />
			</Block>
		</SmallContainer>
	</div>
);

AuthPage.centered = true;

export default AuthPage;
