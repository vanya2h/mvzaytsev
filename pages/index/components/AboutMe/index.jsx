import React from "react";
import cl from "classnames";
import Text from "@components/Text";
import Heading from "@components/Heading";
import Decoration from "../Decoration";
import styles from "./styles";

class AboutMe extends React.PureComponent {
	render = () => {
		return (
			<div className={styles.wrapper}>
				<div className={cl(styles.slide1, styles.slide)}>
					<Decoration
						size="500px"
						fill="#fff5ec"
						style={{
							position: "absolute",
							right: "-300px",
							top: "-300px",
							zIndex: "-1",
							transform: "rotate(-10deg)"
						}}
					/>
					<Decoration
						size="120px"
						fill="#ffecec"
						style={{
							position: "absolute",
							left: "-30px",
							top: "-0px",
							zIndex: "-1"
						}}
					/>
					<div className={styles.title}>
						<Heading size={2}>Я – человек активной жизненной позиции.</Heading>
					</div>
					<div className={styles.imageWithText}>
						<div className={styles.text}>
							<Text relaxed className={styles.scaledText}>
								Мне интересно всё: работа, общение с людьми, книги, спорт,
								культурная жизнь города и путешествия.
							</Text>

							<Text>
								Я согласен с утверждением, что жизнь – это движение. И поэтому
								стремлюсь всё успеть, всё сделать, всё увидеть, всё понять. И не
								случайно моё педагогическое кредо: «Во всём мне хочется дойти до
								самой сути…»
							</Text>
						</div>

						<div className={styles.photo}>
							<img src={require("../../img/a1_resized.jpg")} />
						</div>
					</div>
				</div>
				<div className={cl(styles.slide2, styles.slide)}>
					<Decoration
						size="200px"
						fill="#edfdef"
						style={{
							position: "absolute",
							right: "40%",
							top: "-60px",
							zIndex: "-1"
						}}
					/>
					<Decoration
						size="200px"
						fill="#fff5ec"
						style={{
							position: "absolute",
							right: "100%",
							bottom: "-0",
							zIndex: "-1",
							transform: "rotate(45deg)"
						}}
					/>
					<div className={styles.photo}>
						<img src={require("../../img/a3_resized.jpg")} />
					</div>
					<div className={styles.quote}>
						<Text as="blockquote">
							<span>
								Мысль подрастающего поколения, надо крепко держать ее в руках,
								если не хочешь выпустить из рук будущее
							</span>
							<small>Анри Барбюс</small>
						</Text>
					</div>
				</div>
				<div className={cl(styles.slide3, styles.slide)}>
					<Decoration
						size="300px"
						fill="#fff5ec"
						style={{
							position: "absolute",
							right: "15%",
							bottom: "-230px",
							zIndex: "-1"
						}}
					/>
					<div className={styles.photo}>
						<img src={require("../../img/a2_resized.jpg")} />
					</div>
					<div className={styles.quote}>
						<Text as="blockquote">
							<span>
								Спорт становится средством воспитания тогда, когда он любимое
								занятие каждого
							</span>
							<small>Василий Александрович Сухомлинский</small>
						</Text>
					</div>
				</div>
			</div>
		);
	};
}

export default AboutMe;
