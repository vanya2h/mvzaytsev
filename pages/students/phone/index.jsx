import React from "react";
import Head from "next/head";
import Text from "@components/Text";
import Heading from "@components/Heading";

const StudentsPhonePage = () => (
	<React.Fragment>
		<Head>
			<title>Для учеников - Телефон доверия - Максим Зайцев</title>
		</Head>
		<div className="flex flex-row">
			<div className="grow-1">
				<Text relaxed style={{ maxWidth: "370px" }}>
					Единый общероссийский телефон доверя для детей, подростков и их
					родителей. Работает с 1 сентября 2010 года
				</Text>
				<div className="mt2">
					<a href="https://telefon-doveria.ru/" target="_blank">
						Перейти на сайт
					</a>
				</div>
			</div>
			<div className="grow-1">
				<Heading size={1}>8-800-2000-122</Heading>
				<Text relaxed>Звонок бесплатный и анонимный</Text>
			</div>
		</div>
	</React.Fragment>
);

StudentsPhonePage.hero = {
	title: "Служба доверия",
	description: "Фонд поддержки детей, находящихся в трудной жизненной ситуации"
};

export default StudentsPhonePage;
