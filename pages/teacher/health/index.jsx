import React from "react";
import Head from "next/head";
import Attachment from "@components/Attachment";
import Heading from "@components/Heading";
import Alert from "@components/Alert";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const TeacherHealthPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для учителей - здоровье учителя - Максим Зайцев</title>
		</Head>
		<div className="flex align-start">
			<div
				style={{
					flex: "3 1 0"
				}}
				className={styles.list}
			>
				<Attachment
					type="pdf"
					title="Выгорание учителя"
					description="Обязательно к прочтению"
					url={resolveAttachmentUrl(
						"4c8621f90858fd06bfae6c5846e443d11549454743760.pdf"
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

TeacherHealthPage.hero = {
	title: "Для учителей - здоровье",
	description: "Полезные материалы на тему здоровья для учителей"
};

export default TeacherHealthPage;
