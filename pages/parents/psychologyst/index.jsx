import React from "react";
import Head from "next/head";
import Attachment from "@components/Attachment";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const ParentsPsychologystPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для родителей - псхихологи советуют - Максим Зайцев</title>
		</Head>
		<div
			style={{
				flex: "3 1 0"
			}}
			className={styles.list}
		>
			<Attachment
				type="pub"
				title="Публикация о стрессе"
				url={resolveAttachmentUrl(
					"cf5d7a95be91d03959800830a52894181549456455571.pub"
				)}
			/>
			<Attachment
				type="doc"
				title="Отцы глазами детей"
				url={resolveAttachmentUrl(
					"9dd629a95d2289e394d6c005ee0045e91549456479550.doc"
				)}
			/>
			<Attachment
				type="doc"
				title="Как улучшить память"
				url={resolveAttachmentUrl(
					"bc1523d1fcf4bf76fb32e019d8b79b3c1549456511339.doc"
				)}
			/>
		</div>
	</div>
);

ParentsPsychologystPage.hero = {
	title: "Для родителей - советы психологов",
	description: "Что психологи могут советовать родителям"
};

export default ParentsPsychologystPage;
