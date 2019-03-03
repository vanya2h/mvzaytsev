import React from "react";
import Heading from "@components/Heading";
import Text from "@components/Text";
import { Menu, MenuItem } from "@components/Menu";
import styles from "./styles";

const Footer = () => (
	<div className={styles.footer}>
		<div className={styles.menu}>
			<Menu>
				<MenuItem href="https://edu.gov.ru/">
					Министерство просвещения РФ
				</MenuItem>
				<MenuItem href="https://minobrnauki.gov.ru/">
					Министерство науки и высшего образования РФ
				</MenuItem>
				<MenuItem
					href="http://www.eduportal44.ru/deko/SitePages/%D0%9E%D1%84%D0%B8%D1%86%D0
%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%81%D0
%B0%D0%B9%D1%82.aspx"
				>
					Департамент образования и науки Костромской области
				</MenuItem>
				<MenuItem href="http://www.eduportal44.ru/koiro/default.aspx">
					Костромской областной институт развития образования
				</MenuItem>
				<MenuItem href="http://www.eduportal44.ru/Kostroma_EDU/default.aspx">
					Комитет образования, культуры и работы с молодежью
				</MenuItem>
				<MenuItem href="http://www.eduportal44.ru/Kostroma_EDU/gcoko/default.aspx">
					Городской центр обеспечения качества образования
				</MenuItem>
				<MenuItem href="http://www.eduportal44.ru/Kostroma_EDU/upolnomochenniy/_layouts/15/start.aspx#">
					Уполномоченный по правам ребенка
				</MenuItem>
			</Menu>
		</div>
		<div className={styles.info}>
			<Heading size={4}>Сайт Зайцева Максима Викторовича</Heading>
			<Text>
				Личный сайт школьного учителя. Любое копирование материалов только по
				разрешению правообладателя
			</Text>
		</div>
	</div>
);

export default Footer;
