import React from "react";
import PropTypes from "prop-types";
import { localStorage } from "@utils/localStorage";
import { deepEqual } from "@utils/deepEqual";

export const themeContext = React.createContext();

class ThemeProviderClass extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = this.getDefaultState();
	}

	getDefaultState = () => {
		return (
			localStorage.get("theme") || {
				textSize: "normal",
				blindness: false
			}
		);
	};

	componentDidMount = () => {
		this.setHTMLClass();
	};

	componentDidUpdate = (_, prevState) => {
		if (!deepEqual(prevState, this.state)) {
			localStorage.save(this.state, "theme");
		}

		if (prevState.textSize !== this.state.textSize) {
			this.setHTMLClass();
		}

		if (prevState.blindness !== this.state.blindness) {
			this.setHTMLClass();
		}
	};

	setHTMLClass = () => {
		const { textSize, blindness } = this.state;

		const root = document.getElementsByTagName("html")[0];
		root.classList.remove("normal");
		root.classList.remove("extra");
		root.classList.add(textSize);

		root.classList.remove("blindness");
		if (blindness) {
			root.classList.add("blindness");
		}
	};

	handleBlindness = blindness => {
		this.setState({
			blindness
		});
	};

	handleTextSize = textSize => {
		this.setState({
			textSize
		});
	};

	render = () => {
		const { children } = this.props;
		return (
			<themeContext.Provider
				value={{
					textSize: this.state.textSize,
					blindness: this.state.blindness,
					handleBlindness: this.handleBlindness,
					handleTextSize: this.handleTextSize
				}}
			>
				{children}
			</themeContext.Provider>
		);
	};
}

ThemeProviderClass.propTypes = {
	children: PropTypes.element.isRequired
};

export const ThemeProvider = ThemeProviderClass;

export const withThemeProvider = Enhanceable => {
	class ComponentWithThemeProvider extends React.PureComponent {
		render = () => (
			<ThemeProvider>
				<Enhanceable {...this.props} />
			</ThemeProvider>
		);
	}

	return ComponentWithThemeProvider;
};

export const withThemeContext = mapContextToProps => Enhanceable => {
	class ComponentWithThemeContext extends React.PureComponent {
		render = () => (
			<themeContext.Consumer>
				{context => (
					<Enhanceable {...this.props} {...mapContextToProps(context)} />
				)}
			</themeContext.Consumer>
		);
	}

	return ComponentWithThemeContext;
};
