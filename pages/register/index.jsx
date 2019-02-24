import React from "react";
import Head from "next/head";
import SmallContainer from "@components/SmallContainer";
import Block from "@components/Block";
import UserIcon from "react-feather/dist/icons/user";
import Display from "./components/Display";
import styles from "./styles";

const RegisterPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Регистрация</title>
		</Head>
		<SmallContainer>
			<Block icon={<UserIcon />} title="Регистрация">
				<Display />
			</Block>
		</SmallContainer>
	</div>
);

RegisterPage.centered = true;

export default RegisterPage;
