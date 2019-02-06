import React from "react";
import Head from "next/head";
import Heading from "@components/Heading";
import Button from "@components/Button";
import Text from "@components/Text";
import Attachment from "@components/Attachment";
import styles from "./styles";

const DiaryPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Электронный дневник - Максим зайцев</title>
		</Head>
		<Heading size={2}>Электронный дневник</Heading>
		<Text className={styles.description}>
			На этой странице расположен вход в {"Электронный классный журнал"}
		</Text>
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

			<a href="http://91.143.62.136:8082/">
				<Button primary>Войти в эл. дневник</Button>
			</a>
			<Text>
				Для работы с {"Электронным журналом"} необходимо пройти регистрацию
				(пригласительный код можно взять у классного руководителя)
			</Text>
		</div>
	</div>
);

export default DiaryPage;
