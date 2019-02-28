import React from "react";
import Head from "next/head";
import Attachment from "@components/Attachment";
import styles from "./styles";

const StudentsLessonsPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для учеников - фрагменты уроков - Максим Зайцев</title>
		</Head>
		<div
			style={{
				flex: "3 1 0"
			}}
			className={styles.list}
		>
			<Attachment
				type="mpg"
				title="Сложение дробей с разными знаменателями (6 класс).mpg"
				url="https://drive.google.com/open?id=1Eq2f1bq649YV9ZYPa9IBXptZrugBUGj5"
			/>
			<Attachment
				type="mpg"
				title="Построение сечений (10 класс).mpg"
				url="https://drive.google.com/open?id=1DyGWmeA_epe6kmrSm4BDzveiLSBsW2Ro"
			/>
			<Attachment
				type="mpg"
				title="Устный счет (6 класс).mpg"
				url="https://drive.google.com/open?id=15gJL8g4hDSIycRE774WfX5bkg5SMGydB"
			/>
		</div>
	</div>
);

StudentsLessonsPage.hero = {
	title: "Для учеников - фрагменты уроков",
	description: "Некоторые фрагменты уроков с моим участием"
};

export default StudentsLessonsPage;
