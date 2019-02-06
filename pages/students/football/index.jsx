import React from "react";
import Head from "next/head";
import Text from "@components/Text";
import styles from "./styles";

const StudentsGiaPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для учеников - Футбольная секция - Максим Зайцев</title>
		</Head>
		<div className={styles.list}>
			<Text>
				Футбол был и остается очень популярным среди детей. Да и сам я, с самого
				детства любил пинать мяч на улице.
			</Text>
			<div className={styles.video}>
				<iframe
					src="//vk.com/video_ext.php?oid=238880585&id=456239022&hash=a21e517ddf90c748&hd=2"
					width="100%"
					height="350"
					frameBorder="0"
					allowFullScreen
				/>
			</div>
			<Text>
				А сейчас, я – руководитель секции «мини-футбола» в Средней
				общеобразовательной школе № 8 города Костромы. Тренировки по футболу –
				лучшее решение для активных детей.
			</Text>
			<Text>
				В процессе обучения футболу, дети укрепят свое здоровье, закалят
				характер и приобретут много новых друзей. А кому-то, возможно, откроется
				дорога в большой спорт.
			</Text>
		</div>
	</div>
);

StudentsGiaPage.hero = {
	title: "Футбольная секция",
	description:
		"В этом разделе вы сможете найти полезные материалы для подготовки к экзамену"
};

export default StudentsGiaPage;
