import React from "react";
import Link from "next/link";
import cl from "classnames";
import Heading from "@components/Heading";
import Text from "@components/Text";
import PostList from "./components/PostList";
import Button from "@components/Button";
import ArrowRight from "react-feather/dist/icons/arrow-right";
import styles from "./styles";

const IndexPage = () => (
	<div className={styles.indexPage}>
		<div className="mt4 mb4">
			<div className={cl(styles.advantages, "flex", "flex-column")}>
				<div
					className={cl(
						"mt2 mb2",
						"flex",
						"items-center",
						styles.advantage,
						styles.style1
					)}
				>
					<div className={styles.photo}>
						<img src={require("./img/a1.jpg")} width="100%" />
					</div>
					<div className={styles.content}>
						<Heading size={3} className={styles.head}>
							Я люблю свою работу 👨‍🎓
						</Heading>
						<Text>
							Я – человек активной жизненной позиции. Мне интересно всё: работа,
							общение с людьми, книги, спорт, культурная жизнь города и
							путешествия. Я согласен с утверждением, что жизнь – это движение.
							И поэтому стремлюсь всё успеть, всё сделать, всё увидеть, всё
							понять. И не случайно моё педагогическое кредо: «Во всём мне
							хочется дойти до самой сути…»
						</Text>
						<div className={cl(styles.decor, styles.n1)}>
							<img src={require("./img/books.png")} width="100%" />
						</div>
						<div className={cl(styles.decor, styles.n2)}>
							<img src={require("./img/pen.png")} width="100%" />
						</div>
					</div>
				</div>
				<div
					className={cl(
						"mt2 mb2",
						"flex",
						"items-center",
						styles.advantage,
						styles.style1
					)}
				>
					<div className={styles.content}>
						<Heading size={3} className={styles.head}>
							Я люблю свой класс 🙌
						</Heading>
						<Text>
							{
								"Мысль подрастающего поколения, надо крепко держать ее в руках, если не хочешь выпустить из рук будущее"
							}
						</Text>
						<Text>
							- <b>Анри Барбюс</b>
						</Text>
						<div className={cl(styles.decor, styles.n3)}>
							<img src={require("./img/smile.png")} width="100%" />
						</div>
						<div className={cl(styles.decor, styles.n4)}>
							<img src={require("./img/ring.png")} width="100%" />
						</div>
					</div>
					<div className={styles.photo}>
						<img src={require("./img/a3.png")} width="100%" />
					</div>
				</div>
				<div
					className={cl(
						"mt2 mb2",
						"flex",
						"items-center",
						styles.advantage,
						styles.style1
					)}
				>
					<div className={styles.photo}>
						<img src={require("./img/a2.png")} width="100%" />
					</div>
					<div className={styles.content}>
						<div className={cl(styles.decor, styles.n5)}>
							<img src={require("./img/konki.png")} width="100%" />
						</div>
						<div className={cl(styles.decor, styles.n6)}>
							<img src={require("./img/football.png")} width="100%" />
						</div>
						<Heading size={3} className={styles.head}>
							Спорт - неотъемлемая часть 😤
						</Heading>
						<Text>
							{
								"Спорт становится средством воспитания тогда, когда он любимое занятие каждого."
							}
						</Text>
						<Text>
							- <b>Василий Александрович Сухомлинский</b>
						</Text>
					</div>
				</div>
			</div>
		</div>
		<div className="mt4 mb4">
			<div className={styles.title}>
				<Heading size={3} as="h3">
					Последние записи из блога 🙄
				</Heading>
				<Text
					className="m0"
					style={{
						fontSize: "110%"
					}}
				>
					Мои персональные записи, которые могут быть вам интересны
				</Text>
				<div className="mt4">
					<PostList />
				</div>
			</div>
		</div>
	</div>
);

const Head = () => (
	<div className={cl("flex", styles.main)}>
		<div className={styles.left}>
			<img
				src={require("./img/main-photo.png")}
				width="100%"
				className={styles.mainImage}
				title="Максим Зайцев. Личный сайт"
			/>
		</div>
		<div className={cl(styles.right, "flex", "items-center")}>
			<div className="p3">
				<Heading size={1}>Максим Зайцев</Heading>
				<div className={styles.text}>
					<Text>
						Здравствуйте! Меня зовут{" "}
						<Link href="/work">
							<a>Зайцев Максим Викторович</a>
						</Link>
						. Я окончил Ярославский государственный университет им. П. Г.
						Демидова по специальности {"Прикладная математика и информатика"}. 
					</Text>
					<Text>
						Я - учитель 5-11-х классов с восьмилетним стажем работы. На данный
						момент, преподаю математику в{" "}
						<a
							href="http://www.eduportal44.ru/Kostroma_EDU/Kos-Sch-8/SitePages/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F%D1%8F.aspx"
							target="_blank"
							rel="noopener noreferrer"
						>
							Средней общеобразовательной школе № 8
						</a>{" "}
						города Костромы.
					</Text>
				</div>
				<div className="mt2">
					<Link href="/work">
						<a>
							<Button icon={<ArrowRight size={15} />}>Портфолио</Button>
						</a>
					</Link>
					{/* <Button icon={<Message size={15} />}>Написать мне</Button> */}
				</div>
			</div>
		</div>
		<div className={styles.head}>
			<div className="p3">Обо мне</div>
		</div>
	</div>
);

IndexPage.before = <Head />;

export default IndexPage;
