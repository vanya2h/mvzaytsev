import React from "react";
import Head from "next/head";
import LinkCard from "@components/LinkCard";
import styles from "./styles";

const TeacherLinksPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для учителей - полезные ссылки - Максим Зайцев</title>
		</Head>
		<div
			style={{
				flex: "3 1 0"
			}}
			className={styles.list}
		>
			<LinkCard
				title="Инфоурок.Ведущий образовательный портал России"
				url="https://infourok.ru/"
			/>
			<LinkCard
				title="Социальная сеть работников образования"
				url="ttps://nsportal.ru/"
			/>
			<LinkCard
				title="Педсовет. Персональный помощник педагога"
				url="https://pedsovet.org/beta"
			/>
			<LinkCard
				title="Современный учительский портал"
				url="http://easyen.ru/"
			/>
			<LinkCard title="Учительская.com" url="http://uchitelskaya.com/" />
			<LinkCard title="Учительский портал" url="http://www.uchportal.ru/" />
			<LinkCard
				title="Учителя.com. Учительский портал"
				url="http://uchitelya.com/"
			/>
			<LinkCard
				title="Завуч.инфо Учитель-национальное достояние!"
				url="http://www.zavuch.ru/"
			/>
			<LinkCard
				title="Методсовет. Методический портал учителя"
				url="http://metodsovet.su/"
			/>
			<LinkCard
				title="Методкабинет. Всероссийский педагогический портал. "
				url="http://www.методкабинет.рф/"
			/>
			<LinkCard
				title="Открытый урок. Первое сентября."
				url="http://открытыйурок.рф/"
			/>
		</div>
	</div>
);

TeacherLinksPage.hero = {
	title: "Полезные ссылки для учителей",
	description: "Полезные сайты и порталы для учителей в одном месте"
};

export default TeacherLinksPage;
