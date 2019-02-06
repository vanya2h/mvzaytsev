import React from "react";
import Head from "next/head";
import Heading from "@components/Heading";
import Button from "@components/Button";
import Alert from "@components/Alert";
import Text from "@components/Text";
import styles from "./styles";

const DiaryPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Электронный дневник - Максим Зайцев</title>
		</Head>
		<Alert info>
			<Heading style={{ display: "inline" }} size={5}>
				Внимание
			</Heading>{" "}
			Для работы с {"Электронным журналом"} необходимо пройти регистрацию
			(пригласительный код можно взять у классного руководителя)
		</Alert>
		<div className="mt3">
			<Heading size={4}>Вход в кабинет</Heading>

			<Text>
				В личном кабинете вы сможете найти:
				<ul>
					<li>Расписание уроков вашего класса, </li>
					<li>Электронный дневник учащихся, </li>
					<li>Электронный журнал учителя, </li>
					<li>Домашние задания</li>
				</ul>
			</Text>

			<a href="https://netschool.eduportal44.ru/">
				<Button primary>Войти в эл. дневник</Button>
			</a>
		</div>
	</div>
);

DiaryPage.hero = {
	title: "Электронный дневник",
	description: "Узнайте как пользоваться электронным дневником здесь"
};

export default DiaryPage;
