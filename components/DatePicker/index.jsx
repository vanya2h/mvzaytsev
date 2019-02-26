import React from "react";
import ReactDatePicker from "react-datepicker";
import Input from "@components/Input";
import "./picker.css";

const DatePicker = props => (
	<ReactDatePicker
		customInput={<Input fluid circular placeholder="Выберите дату.." />}
		dateFormat="DD/MM/YYYY"
		peekNextMonth
		locale="ru"
		showMonthDropdown
		showYearDropdown
		dropdownMode="select"
		{...props}
	/>
);

export default DatePicker;
