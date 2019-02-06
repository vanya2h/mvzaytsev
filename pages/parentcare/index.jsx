import React from "react";
import Head from "next/head";
import Heading from "@components/Heading";
import Text from "@components/Text";
import Attachment from "@components/Attachment";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const ParentCarePage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для родителей - Максим зайцев</title>
		</Head>
		<Heading size={2}>Для родителей</Heading>
		<Text className={styles.description}>
			Полезные материалы и ссылки для родителей
		</Text>
		<div className={styles.list}>
			<Attachment
				type="pdf"
				title="Закон об образовании"
				url={resolveAttachmentUrl(
					"1607925a77c528455a2dce9ed3212cab1549440770533.pdf"
				)}
			/>
			<Attachment
				type="pdf"
				title="Конвенция о правах ребенка"
				url={resolveAttachmentUrl(
					"df080217e4228eb0650ed5f6c43f2e8e1549440774557.pdf"
				)}
			/>
			<Attachment
				type="pdf"
				title="Права и обазанности родителей и детей"
				url={resolveAttachmentUrl(
					"60ef2d423b10e085fcd82379032fb9681549440778532.pdf"
				)}
			/>
			<Attachment
				type="pdf"
				title="Приказ об охране здоровья обучающихся"
				url={resolveAttachmentUrl(
					"7e1262309dfdbd0c551cabb3028384651549440785572.pdf"
				)}
			/>
			<Attachment
				type="pdf"
				title="Уголовный кодекс"
				url={resolveAttachmentUrl(
					"ee94e2dcae99e96824f2bbd28d1d0d851549440789409.pdf"
				)}
			/>
			<Attachment
				type="pdf"
				title="Юридическая консультация"
				url={resolveAttachmentUrl(
					"cd37130b465aa252cd9768516806bbf21549440794084.pdf"
				)}
			/>
		</div>
	</div>
);

export default ParentCarePage;
