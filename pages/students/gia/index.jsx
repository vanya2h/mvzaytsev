import React from "react";
import Head from "next/head";
import Attachment from "@components/Attachment";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const StudentsGiaPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для учеников - Подготовка к ГИА - Максим Зайцев</title>
		</Head>
		<div className={styles.list}>
			<Attachment
				type="pptx"
				description="Презентация, которая поможет в непростом деле"
				title="Подготовка к ГИА"
				url={resolveAttachmentUrl(
					"b69137d7413ddee4e9b2bcdb5dd88d171549446716571.pptx"
				)}
			/>
			<Attachment
				type="Сайт"
				description="Открытый банк с заданиями и много полезной информации"
				title="Федеральный институт педагогических измерений"
				url="http://fipi.ru"
			/>
			<Attachment
				type="Сайт"
				description="Огромная база с вариантами билетов ГИА и ЕГЭ"
				title="Сайт Решу ЕГЭ"
				url="https://ege.sdamgia.ru"
			/>
		</div>
	</div>
);

StudentsGiaPage.hero = {
	title: "Подготовка к ГИА",
	description:
		"В этом разделе вы сможете найти полезные материалы для подготовки к экзамену"
};

export default StudentsGiaPage;
