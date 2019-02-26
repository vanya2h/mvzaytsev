import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Text from "@components/Text";
import { compose } from "@utils/compose";
import Alert from "@components/Alert";
import DatePicker from "@components/DatePicker";
import { withUpdateCommentFormContext } from "../../context";

class CreatedAt extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			temporaryDate: props.value ? moment(props.value) : undefined
		};
	}

	handleChange = momentObject => {
		const { onChange } = this.props;

		this.setState(
			{
				temporaryDate: momentObject
			},
			() => onChange(momentObject.toISOString())
		);
	};

	render = () => {
		const { typeError } = this.props;
		const { temporaryDate } = this.state;

		return (
			<React.Fragment>
				<Text bold as="label" htmlFor="fakeCreated">
					Дата размещения
				</Text>
				<DatePicker
					maxDate={moment()}
					onChange={this.handleChange}
					selected={temporaryDate}
					placeholder="Выберите дату размещения"
				/>
				{typeError && (
					<div className="mt2">
						<Alert error>
							<Text>{typeError}</Text>
						</Alert>
					</div>
				)}
			</React.Fragment>
		);
	};
}

CreatedAt.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.string
};

CreatedAt.defaultProps = {
	typeError: null,
	value: ""
};

const enhance = compose(
	withUpdateCommentFormContext(context => ({
		value: context.selectors.selectField(context, {
			field: "fakeCreated"
		}),
		typeError: context.selectors.selectTypeErrorMessage(context, {
			field: "fakeCreated"
		}),
		onChange: value =>
			context.handleTemporaryData({
				fakeCreated: value
			})
	}))
);

export default enhance(CreatedAt);
