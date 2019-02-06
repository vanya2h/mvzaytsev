import React from "react";
import Head from "next/head";
import Attachment from "@components/Attachment";
import Heading from "@components/Heading";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const LessonsPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Планы уроков - Максим зайцев</title>
		</Head>
		<div className="mb3">
			<Heading size={3}>5 класс</Heading>
		</div>
		<div className={styles.list}>
			<Attachment
				type="zip"
				title="Деление десятичных чисел на натуральное число"
				url={resolveAttachmentUrl(
					"62f4862352ea079da2f854ee469bfe2f1549459228720.zip"
				)}
			/>
			<Attachment
				type="zip"
				title="Понятие десятичной дроби"
				url={resolveAttachmentUrl(
					"153a3d10c92d5c5906049b6f02c2ab1e1549459259309.zip"
				)}
			/>
			<Attachment
				type="zip"
				title="Числовые и буквенные выражения"
				url={resolveAttachmentUrl(
					"095001adef79c3cd6d94e761f3aeb4c31549459283064.zip"
				)}
			/>
		</div>
		<div className="mb3 mt3">
			<Heading size={3}>9 класс</Heading>
		</div>
		<div className={styles.list}>
			<Attachment
				type="zip"
				title="Статистика - дизайн информации"
				url={resolveAttachmentUrl(
					"6503cf45cddba08f38d3f0dd0e4072d71549459336444.zip"
				)}
			/>
			<Attachment
				type="zip"
				title="Уравнения с двумя переменными"
				url={resolveAttachmentUrl(
					"0ea00e238ce9210d6a1e38f33e04c1b51549459358898.zip"
				)}
			/>
		</div>
	</div>
);

LessonsPage.hero = {
	title: "Планы уроков для 5 и 9 классов",
	description: "Мои наработанные материалы для проведения уроков"
};

export default LessonsPage;
