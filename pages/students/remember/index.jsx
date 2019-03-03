import React from "react";
import Head from "next/head";
import Attachment from "@components/Attachment";
import Text from "@components/Text";
import Heading from "@components/Heading";
import styles from "./styles";

const StudentsRememberPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для учеников - памятка для учащихся - Максим Зайцев</title>
		</Head>
		<div
			style={{
				flex: "3 1 0"
			}}
			className={styles.list}
		>
			<div>
				<Heading size={4}>Правила поведения в школе</Heading>
				<Text relaxed>Обучающий видеоролик</Text>
			</div>
			<iframe
				src="https://drive.google.com/file/d/1XVSt738JkV1BrQhzCHu2_vophM6d3Cub/preview"
				width="100%"
				height="460px"
			/>
			<div>
				<Heading size={4}>Правила дорожного движения (ПДД)</Heading>
				<Text relaxed>Обучающий видеоролик</Text>
			</div>
			<iframe
				width="100%"
				height="460px"
				src="https://www.youtube.com/embed/Ij68FZTE_SI"
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
			<div>
				<Heading size={4}>Полезные файлы</Heading>
				<Text relaxed>
					Также посмотрите правила поведения учащихся на каникулах
				</Text>
			</div>
			<Attachment
				type="doc"
				title="Правила поведения учащихся на каникулах» Общие положения.doc"
				url="https://drive.google.com/open?id=1nU7C1CHsjkFdkPkbuNQUvyUYqelkLGPO"
			/>
		</div>
	</div>
);

StudentsRememberPage.hero = {
	title: "Для учеников - памятка для учащихся",
	description: "Сборник правил и норм для всех учащихся"
};

export default StudentsRememberPage;
