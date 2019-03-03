import React from "react";
import Head from "next/head";
import LinkCard from "@components/LinkCard";
import styles from "./styles";

const StudentsLinksPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Для учеников - Полезные ссылки - Максим Зайцев</title>
		</Head>
		<div
			style={{
				flex: "3 1 0"
			}}
			className={styles.list}
		>
			<LinkCard
				title="Российское образование. Федеральный портал"
				url="http://www.edu.ru/index.php"
			/>
			<LinkCard
				title="Федеральная служба по надзору в сфере образования и науки"
				url="http://obrnadzor.gov.ru/ru/about/general_information/"
			/>
			<LinkCard
				title="Открытая математика. Сайт компании ФИЗИКОН"
				url="http://www.mathematics.ru/"
			/>
			<LinkCard title="Все ВУЗы России" url="http://abitur.nica.ru/" />
			<LinkCard
				title=" Многоцелевой открытый банк заданий по математике. Творческие задания для любителей математики"
				url="http://opencollection.ru/or/bank/Main.html?discId=1&bankId=4&view=Content"
			/>
			<LinkCard
				title="Логические задачи и головоломки"
				url="http://www.smekalka.pp.ru/"
			/>
			<LinkCard
				title="Образовательный математический сайт"
				url="http://www.exponenta.ru/default.asp"
			/>
			<LinkCard
				title="Интернет-олимпиады по математике и информатике
				для школьников 7-11 классов"
				url="http://olymp.ifmo.ru/"
			/>
			<LinkCard
				title="On-line справочник по математике"
				url="http://mathforall.narod.ru/formuls/index.htm"
			/>
			<LinkCard
				title="Международная олимпиада по основам наук по УРФО"
				url="http://www.urfodu.ru/"
			/>
			<LinkCard
				title="IX-ая Международная Интернет-Олимпиада «Эрудиты планеты»"
				url="http://erudites.ru/"
			/>
			<LinkCard
				title="Математические олимпиады и олимпиадные задачи"
				url="http://zaba.ru/"
			/>
			<LinkCard
				title="Логические задачи, тесты, игры"
				url="http://nazva.net/"
			/>
			<LinkCard title="Математические этюды" url="http://www.etudes.ru/" />
			<LinkCard
				title="Познание и творчество"
				url="http://www.future4you.ru/index.php?option=com_content&view=article&id=658&Itemid=268"
			/>
			<LinkCard
				title="Научно-популярный физико-математический журнал для школьников и студентов"
				url="http://www.kvant.info/"
			/>
		</div>
	</div>
);

StudentsLinksPage.hero = {
	title: "Полезные ссылки",
	description: "Полезные ссылки, которые могут быть интересны любому ученику"
};

export default StudentsLinksPage;
