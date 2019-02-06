import React from "react";
import styles from "./styles";

const Footer = () => (
	<div className={styles.body}>
		Это персональный сайт{" "}
		<a
			href="https://vk.com/id238880585"
			target="_blank"
			rel="noopener noreferrer"
		>
			Максима Зайцева
		</a>
		. Разрабатывается он с небольшой помощью{" "}
		<a href="https://vk.com/vanya2h" target="_blank" rel="noopener noreferrer">
			этого человека
		</a>{" "}
		на самых (по нашему мнению) современных инструментах
	</div>
);

export default Footer;
