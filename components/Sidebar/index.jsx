import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";
import Link from "next/link";
import Home from "react-feather/dist/icons/home";
import Bookopen from "react-feather/dist/icons/book-open";
import UsersIcon from "react-feather/dist/icons/users";
import PenIcon from "react-feather/dist/icons/edit";
import FeathersIcon from "react-feather/dist/icons/feather";
import LoginIcon from "react-feather/dist/icons/log-in";
import Book from "react-feather/dist/icons/book";
import BellIcon from "react-feather/dist/icons/bell";
import { connect } from "react-redux";
import { selectIsAuthed } from "@store/selectors/user";
import UserIcon from "react-feather/dist/icons/user";
import ArrowRight from "react-feather/dist/icons/arrow-right";
import Zap from "react-feather/dist/icons/zap";
import { Menu, MenuItem } from "@components/Menu";
import Heading from "@components/Heading";
import Text from "@components/Text";
import styles from "./styles";

class Sidebar extends React.PureComponent {
	render = () => {
		const { isAuthed } = this.props;

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
								link="/blog"
								icon={<PenIcon className={styles.icon} size={18} />}
							>
								Мой блог
							</MenuItem>
							<MenuItem
								sub={
									<React.Fragment>
										<MenuItem link="/parents/law">Законодательство</MenuItem>
										<MenuItem link="/parents/health">Здоровье ребенка</MenuItem>
										<MenuItem link="/parents/psychologyst">
											Советы психологов
										</MenuItem>
									</React.Fragment>
								}
								icon={<Zap className={styles.icon} size={18} />}
							>
								Родителям
							</MenuItem>
							<MenuItem
								icon={<Bookopen className={styles.icon} size={18} />}
								sub={
									<React.Fragment>
										<MenuItem link="/teacher/health">Здоровье учителя</MenuItem>
										<MenuItem link="/teacher/links">Полезные ссылки</MenuItem>
										<MenuItem link="/teacher/class">Классные часы</MenuItem>
									</React.Fragment>
								}
							>
								Учителям
							</MenuItem>
							<MenuItem
								sub={
									<React.Fragment>
										<MenuItem link="/students/gia">Подготовка к ГИА</MenuItem>
										<MenuItem link="/students/think">Думай, решай</MenuItem>
										<MenuItem link="/students/football">
											Футбольная сеция
										</MenuItem>
									</React.Fragment>
								}
								icon={<UsersIcon className={styles.icon} size={18} />}
							>
								Ученикам
							</MenuItem>
							<MenuItem
								link="/diary"
								icon={<Book className={styles.icon} size={18} />}
							>
								Эл. дневник
							</MenuItem>
							<MenuItem
								link="/lessons"
								icon={<FeathersIcon className={styles.icon} size={18} />}
							>
								Планы уроков
							</MenuItem>
							<MenuItem
								link="/work"
								icon={<UserIcon className={styles.icon} size={18} />}
							>
								Портфолио
							</MenuItem>
							<MenuItem
								link="/teacherofyear"
								icon={<BellIcon className={styles.icon} size={18} />}
							>
								Учитель года 2019
							</MenuItem>
						</Menu>
					</div>
				</div>
				<div className={styles.bottom}>
					<Menu>
						{!isAuthed ? (
							<MenuItem
								link="/auth"
								icon={<LoginIcon className={styles.icon} size={18} />}
							>
								Войти
							</MenuItem>
						) : (
							<MenuItem
								link="/admin"
								icon={<LoginIcon className={styles.icon} size={18} />}
							>
								Админка
							</MenuItem>
						)}
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

Sidebar.propTypes = {
	isAuthed: PropTypes.bool.isRequired
};

export default connect(store => ({
	isAuthed: selectIsAuthed(store)
}))(Sidebar);
