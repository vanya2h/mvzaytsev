import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "next/link";
import Button from "@components/Button";
import { selectUserField } from "@store/selectors/user";
import { compose } from "@utils/compose";
import Text from "@components/Text";

class Done extends React.PureComponent {
	render = () => {
		const { name } = this.props;
		return (
			<React.Fragment>
				<Text relaxed>
					Добрый день, {name}. Вы успешно прошли процесс регистрации. Теперь вы
					можете лайкать публикации из блога и оставлять свои комментарии
				</Text>
				<div className="mt2">
					<Link href="/">
						<a>
							<Button>На главную</Button>
						</a>
					</Link>
				</div>
			</React.Fragment>
		);
	};
}

Done.propTypes = {
	name: PropTypes.string.isRequired
};

const enhance = compose(
	connect(store => ({
		name: selectUserField(store, {
			field: "name"
		})
	}))
);

export default enhance(Done);
