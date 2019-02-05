import React from "react";
import cl from "classnames";
import Link from "next/link";
import Home from "react-feather/dist/icons/home";
import Bookopen from "react-feather/dist/icons/book-open";
import Book from "react-feather/dist/icons/book";
import UserIcon from "react-feather/dist/icons/user";
import ArrowRight from "react-feather/dist/icons/arrow-right";
import Zap from "react-feather/dist/icons/zap";
import { Menu, MenuItem } from "@components/Menu";
import Heading from "@components/Heading";
import Text from "@components/Text";
import styles from "./styles";

class Sidebar extends React.PureComponent {
	render = () => {
		return (
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<Heading size={4}>
						<Link href="/">
							<a>Максим Зайцев</a>
						</Link>
					</Heading>
					<Text className={cl("m0", styles.description)}>
						Персональный сайт
					</Text>
					<div className="mt3">
						<Menu>
							<MenuItem
								link="/"
								icon={<Home className={styles.icon} size={18} />}
							>
								Главная
							</MenuItem>
							<MenuItem
								link="/parentcare"
								icon={<Zap className={styles.icon} size={18} />}
							>
								Родителям
							</MenuItem>
							<MenuItem
								link="/studentscare"
								icon={<Bookopen className={styles.icon} size={18} />}
							>
								<span className={styles.students}>
									<span>Ученикам</span>
									<span className={styles.emoji}>🤗</span>
								</span>
							</MenuItem>
							<MenuItem
								link="/diary"
								icon={<Book className={styles.icon} size={18} />}
							>
								Эл. дневник
							</MenuItem>
							<MenuItem
								link="/work"
								icon={<UserIcon className={styles.icon} size={18} />}
							>
								Портфолио
							</MenuItem>
						</Menu>
					</div>
				</div>
				<div className={styles.bottom}>
					<Menu>
						<MenuItem icon={<ArrowRight className={styles.icon} size={18} />}>
							<a
								href="https://vk.com/id238880585"
								target="_blank"
								rel="noopener noreferrer"
							>
								Я в vk.com
							</a>
						</MenuItem>
					</Menu>
				</div>
			</div>
		);
	};
}

export default Sidebar;
