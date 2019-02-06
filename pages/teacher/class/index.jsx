import React from "react";
import Head from "next/head";
import Attachment from "@components/Attachment";
import Heading from "@components/Heading";
import Alert from "@components/Alert";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const TeacherClassPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для учителей - классные часы - Максим Зайцев</title>
		</Head>
		<div className="flex align-start">
			<div
				style={{
					flex: "3 1 0"
				}}
				className={styles.list}
			>
				<Attachment
					type="zip"
					title="Город Кострома"
					description="Кострома́ — город в России на реке Волге, административный центр Костромской области, речной порт. Население — 277 280 чел. "
					url={resolveAttachmentUrl(
						"2261c3107f997d453c622bc667a2a1cb1549456678675.zip"
					)}
				/>
				<Attachment
					type="zip"
					title="Олимпийское движение"
					description="Олимпийское движение представляет собой жизненную философию, возвышающую и объединяющую в единое целое достоинства тела, воли и разума. "
					url={resolveAttachmentUrl(
						"c6a2922766095ce7b769af2028caa15b1549456795102.zip"
					)}
				/>
				<Attachment
					type="zip"
					title="Профессии будущего"
					description="Большая презентация и коллекция видеороликов на тему профессий будущего. Какие профессии востребованы, какие будут, а какие уйдут в прошлое"
					url={resolveAttachmentUrl(
						"112b91a3eb567b7e37aed5689a4577ec1549457030111.zip"
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

TeacherClassPage.hero = {
	title: "Для учителей - классные часы",
	description: "Коллекции материалов для классных часов на разные темы"
};

export default TeacherClassPage;
