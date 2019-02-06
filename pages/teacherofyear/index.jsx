import React from "react";
import Head from "next/head";
import Attachment from "@components/Attachment";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const TeacherOfYearPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Учитель года 2019 - Максим зайцев</title>
		</Head>
		<div className={styles.list}>
			<Attachment
				type="docx"
				title="Эссе на тему 'Каждый выбирает для себя..'"
				description="Работа Зайцева Максима для конкурса"
				url={resolveAttachmentUrl(
					"ce8c87588c3af7eb0f5986779b8c1c851549446497016.docx"
				)}
			/>
		</div>
	</div>
);

TeacherOfYearPage.hero = {
	title: "Конкурс « Учитель года 2019 »",
	description: "Конкурс педагогического мастерства. Номинация « Учитель »"
};

export default TeacherOfYearPage;
