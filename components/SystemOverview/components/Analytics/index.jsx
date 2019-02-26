import React from "react";
import { plural } from "@utils/plural";
import Heading from "@components/Heading";
import { parseError } from "@utils/parseError";
import { compose } from "@utils/compose";
import Loader from "@components/Loader";
import Text from "@components/Text";
import { withAsyncSetState } from "@HOC/utils/withAsyncSetState";
import { createFetchAnalytics } from "./creators";
import styles from "./styles";

class Analytics extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			analytics: null
		};

		this.fetchAnalytics = createFetchAnalytics();
	}

	componentDidMount = () => {
		this.fetch();
	};

	fetch = async () => {
		try {
			await this.asyncSetState({
				error: null
			});

			const response = await this.fetchAnalytics();

			await this.asyncSetState({
				analytics: response.data
			});

			return Promise.resolve(true);
		} catch (reason) {
			const error = parseError(reason);

			await this.asyncSetState({
				error
			});

			return Promise.reject(reason);
		}
	};

	render = () => {
		const { analytics } = this.state;

		if (!analytics) {
			return (
				<div className={styles.centered}>
					<Loader />
				</div>
			);
		}

		return (
			<div className="flex flex-row items-center justify-between">
				<div className={styles.item}>
					<Heading size={3} className={styles.number}>
						{analytics.today}
					</Heading>
					<Text relaxed>
						{plural(analytics.today, "Посетитель", "Посетителя", "Посетителей")}{" "}
						сегодня
					</Text>
				</div>
				<div className={styles.item}>
					<Heading size={3} className={styles.number}>
						{analytics.yesterday}
					</Heading>
					<Text relaxed>
						{plural(
							analytics.yesterday,
							"Посетитель",
							"Посетителя",
							"Посетителей"
						)}{" "}
						вчера
					</Text>
				</div>
				<div className={styles.item}>
					<Heading size={3} className={styles.number}>
						{analytics.month}
					</Heading>
					<Text relaxed>
						{plural(analytics.month, "Посетитель", "Посетителя", "Посетителей")}{" "}
						за месяц
					</Text>
				</div>
			</div>
		);
	};
}

const enhance = compose(withAsyncSetState);

export default enhance(Analytics);
