import React from "react";
import Head from "next/head";
import Heading from "@components/Heading";
import Text from "@components/Text";
import Attachment from "@components/Attachment";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const TeacherOfYearPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Учитель года 2019 - Максим зайцев</title>
		</Head>
		<Heading size={2}>Конкурс {"Учитель года 2019"}</Heading>
		<Text className={styles.description}>
			Конкурс педагогического мастерства. Номинация «Учитель»
		</Text>

		<div className={styles.list}>
			<Attachment
				type="docx"
				title="Эссе на тему 'Каждый выбирает для себя..'"
				url={resolveAttachmentUrl(
					"ce8c87588c3af7eb0f5986779b8c1c851549446497016.docx"
				)}
			/>
		</div>
	</div>
);

export default TeacherOfYearPage;
