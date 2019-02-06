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
			<title>Для учеников - Максим зайцев</title>
		</Head>
		<Heading size={2}>Для учеников</Heading>
		<Text className={styles.description}>
			Полезные материалы и ссылки для учеников
		</Text>
		<div className={styles.list}>
			<Attachment
				type="pptx"
				description="Презентация, которая поможет в непростом деле"
				title="Подготовка к ГИА"
				url={resolveAttachmentUrl(
					"b69137d7413ddee4e9b2bcdb5dd88d171549446716571.pptx"
				)}
			/>
		</div>
		<div className="mt3">
			<Heading size={4}>Думай, решай, отгадывай</Heading>
			<Text>
				Мои любители математики! Предлагаю вам расширить свои знания по
				предмету. Решайте задачи, делитесь задачами со мной.
			</Text>
			<Text>
				Это поможет вам совершенствовать и развивать важнейшие математические
				умения, а также с ещё большей силой полюбить такую точную науку «
				<b>математика</b>».
			</Text>
			<ul className="spaced-list">
				<li>
					Одно трехзначное число состоит из различных цифр, следующих в порядке
					возрастания, а в его названии все слова начинаются с одной и той же
					буквы. Другое трехзначное число, наоборот, состоит из одинаковых цифр,
					но в его названии все слова начинаются с разных букв. Какие это числа?
				</li>
				<li>
					а) Дан осесимметричный выпуклый 101-угольник. Докажите, что ось
					симметрии проходит через одну из его вершин. <br />
					б) Что можно сказать в случае десятиугольника?
				</li>
				<li>
					В каждой клетке прямоугольной таблицы размером M×K написано число.
					Сумма чисел в каждой строке и в каждом столбце равна 1. Докажите, что
					M = K.{" "}
				</li>
				<li>
					Используя пять четвёрок, арифметические действия и возведение в
					степень, составьте числа от 1 до 22.
				</li>
			</ul>
		</div>
	</div>
);

export default ParentCarePage;
