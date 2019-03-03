import React from "react";
import Head from "next/head";
import Heading from "@components/Heading";
import Text from "@components/Text";
import styles from "./styles";

const StudentsLessonsPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для учеников - фрагменты уроков - Максим Зайцев</title>
		</Head>

		<div>
			<Heading size={4}>Сложение дробей с разными знаменателями</Heading>
			<Text relaxed>Материал для 6 класса</Text>
		</div>
		<iframe
			src="https://drive.google.com/file/d/1Eq2f1bq649YV9ZYPa9IBXptZrugBUGj5/preview"
			width="100%"
			height="460px"
		/>

		<div>
			<Heading size={4}>Построение сечений</Heading>
			<Text relaxed>Материал для 10 класса</Text>
		</div>
		<iframe
			src="https://drive.google.com/file/d/1DyGWmeA_epe6kmrSm4BDzveiLSBsW2Ro/preview"
			width="100%"
			height="460px"
		/>
		<div>
			<Heading size={4}>Устный счет</Heading>
			<Text relaxed>Материал для 6 класса</Text>
		</div>
		<iframe
			src="https://drive.google.com/file/d/15gJL8g4hDSIycRE774WfX5bkg5SMGydB/preview"
			width="100%"
			height="460px"
		/>
	</div>
);

StudentsLessonsPage.hero = {
	title: "Для учеников - фрагменты уроков",
	description: "Некоторые фрагменты уроков с моим участием"
};

export default StudentsLessonsPage;
