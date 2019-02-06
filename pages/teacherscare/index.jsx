import React from "react";
import Head from "next/head";
import Heading from "@components/Heading";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import Text from "@components/Text";
import Attachment from "@components/Attachment";
import styles from "./styles";

const TeacherCarePage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для учителей - Максим зайцев</title>
		</Head>
		<Heading size={2}>Для учителей 🤗</Heading>
		<Text className={styles.description}>
			Полезные материалы и ссылки для учителей
		</Text>
		<div className={styles.list}>
			<Attachment
				download={false}
				type="pdf"
				title="Выгорание учителя"
				url={resolveAttachmentUrl(
					"2ed80acc1a0520b30627b7c0c58493161549441707425.pdf"
				)}
			/>
			<Attachment
				download={false}
				type="Сайт"
				title="Инфоурок.Ведущий образовательный портал России."
				url="https://infourok.ru/"
			/>
			<Attachment
				download={false}
				type="Сайт"
				title="Социальная сеть работников образования."
				url="https://nsportal.ru/"
			/>
			<Attachment
				download={false}
				type="Сайт"
				title="Педсовет. Персональный помощник педагога."
				url="https://pedsovet.org/beta"
			/>
			<Attachment
				download={false}
				type="Сайт"
				title="Современный учительский портал."
				url="http://easyen.ru/"
			/>
			<Attachment
				download={false}
				type="Сайт"
				title="Учительская.com."
				url="http://uchitelskaya.com/"
			/>
			<Attachment
				download={false}
				type="Сайт"
				title="Учителя.com.Учительский портал. "
				url="http://uchitelya.com/"
			/>
		</div>
	</div>
);

export default TeacherCarePage;
