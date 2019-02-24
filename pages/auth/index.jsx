import React from "react";
import Display from "./components/Display";
import styles from "./styles";

const AuthPage = () => (
	<div className={styles.authPage}>
		<Display />
	</div>
);

AuthPage.centered = true;

export default AuthPage;
