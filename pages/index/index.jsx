import React from "react";
import Link from "next/link";
import cl from "classnames";
import Heading from "@components/Heading";
import Text from "@components/Text";
import Button from "@components/Button";
import ArrowRight from "react-feather/dist/icons/arrow-right";
import Message from "react-feather/dist/icons/message-circle";
import styles from "./styles";

const IndexPage = () => <div className={styles.indexPage}>Henlo u stinky</div>;

const Head = () => (
	<div className="flex">
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
							<Button primary icon={<ArrowRight size={15} />}>
								Портфолио
							</Button>
						</a>
					</Link>
					<Button icon={<Message size={15} />}>Написать мне</Button>
				</div>
			</div>
		</div>
		<div className={styles.title}>
			<div className="p3">Обо мне</div>
		</div>
	</div>
);

IndexPage.before = <Head />;

export default IndexPage;
