import React from "react";
import Link from "next/link";
import Text from "@components/Text";
import Heading from "@components/Heading";
import Button from "@components/Button";
import ArrowRight from "react-feather/dist/icons/arrow-right";
import styles from "./styles";

class Head extends React.PureComponent {
	render = () => {
		return (
			<div className={styles.main}>
				<div className={styles.photo}>
					<div
						style={{
							backgroundImage: `url(${require("../../img/main-photo.png")})`
						}}
						className={styles.mainImage}
					/>
				</div>
				<div className={styles.text}>
					<div className="p3">
						<Heading size={3}>
							Зайцев Максим Викторович,
							<br />
							<small>учитель математики</small>
						</Heading>
						<Text>
							Здравствуйте! Меня зовут{" "}
							<Link href="/work">
								<a>Зайцев Максим Викторович</a>
							</Link>
							. Я окончил Ярославский государственный университет им. П. Г.
							Демидова по специальности «Прикладная математика и информатика». 
						</Text>
						<Text>
							<small>
								Я - учитель 5-11-х классов с восьмилетним стажем работы. На
								данный момент преподаю математику в{" "}
								<a
									href="http://www.eduportal44.ru/Kostroma_EDU/Kos-Sch-8/SitePages/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F%D1%8F.aspx"
									target="_blank"
									rel="noopener noreferrer"
								>
									Средней общеобразовательной школе № 8
								</a>{" "}
								города Костромы.
							</small>
						</Text>
						<div className="mt2">
							<Link href="/work">
								<a>
									<Button icon={<ArrowRight size={15} />}>Портфолио</Button>
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.title}>Обо мне</div>
			</div>
		);
	};
}

export default Head;
