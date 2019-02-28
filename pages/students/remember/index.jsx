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
			<Attachment
				type="mpg"
				title="Правила поведения в школе.mp4"
				url="https://drive.google.com/open?id=1XVSt738JkV1BrQhzCHu2_vophM6d3Cub"
			/>
			<Attachment
				type="doc"
				title="Правила поведения учащихся на каникулах» Общие положения.doc"
				url="https://drive.google.com/open?id=1nU7C1CHsjkFdkPkbuNQUvyUYqelkLGPO"
			/>
			<Attachment
				type="docx"
				title="Подумать.docx"
				url="https://drive.google.com/open?id=10tvzH1jL-yFlOC_QOfnBTtEpgKX8Li4A"
			/>
		</div>
		<div className="mt3">
			<Text relaxed>
				Единый общероссийский телефон доверия для детей и подростков
			</Text>
			<Heading size={2}>8-800-2000-122</Heading>
		</div>
	</div>
);

StudentsRememberPage.hero = {
	title: "Для учеников - памятка для учащихся",
	description: "Сборник правил и норм для всех учащихся"
};

export default StudentsRememberPage;
