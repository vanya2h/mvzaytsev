import React from "react";
import moment from "moment";
import ClockIcon from "react-feather/dist/icons/clock";
import styles from "./styles";

class Clock extends React.PureComponent {
	componentDidMount = () => {
		setInterval(this.inc, 1000);
	};
	inc = () => {
		this.forceUpdate();
	};
	render = () => {
		return (
			<div>
				<span className={styles.icon}>
					<ClockIcon size={15} />
				</span>
				<span>{moment().format("D. MMMM YYYY H:mm:ss")}</span>
			</div>
		);
	};
}

export default Clock;
