import React from "react";
import Head from "next/head";
import Attachment from "@components/Attachment";
import Heading from "@components/Heading";
import Alert from "@components/Alert";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const ParentHealthPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для родителей - здоровье ребенка - Максим зайцев</title>
		</Head>
		<div className="flex">
			<div
				style={{
					flex: "3 1 0"
				}}
				className={styles.list}
			>
				<Attachment
					type="pdf"
					title="Гимнастика для глаз"
					url={resolveAttachmentUrl(
						"1edca414f51f324d2891b6b4075dd07c1549453568201.pdf"
					)}
				/>
				<Attachment
					type="pdf"
					title="Вопрос: Нужна ли зарядка"
					url={resolveAttachmentUrl(
						"383763bdf76870e49d3eca60798ddf9e1549453598521.pdf"
					)}
				/>
				<Attachment
					type="pdf"
					title="Психологическая зависимость от компьютера"
					url={resolveAttachmentUrl(
						"e57d0260aa36bce5749e6bc32ab42b051549453618025.pdf"
					)}
				/>
				<Attachment
					type="pdf"
					title="Режим для школьника"
					url={resolveAttachmentUrl(
						"60fcd53b4d5bd4cadf168e19c25a98f71549453651755.pdf"
					)}
				/>
			</div>
			<div
				className="ml3"
				style={{
					flex: "1 1 0"
				}}
			>
				<Alert info>
					<Heading
						size={5}
						style={{
							display: "inline"
						}}
					>
						Замечание
					</Heading>{" "}
					Для скачивания файлов просто кликните на имя файла, подсвеченное синим
				</Alert>
			</div>
		</div>
	</div>
);

ParentHealthPage.hero = {
	title: "Для родителей - здоровье ребенка",
	description: "Полезные материалы на тему здоровья ребенка для родителей"
};

export default ParentHealthPage;
