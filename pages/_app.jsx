import React from "react";
import App, { Container as NextContainer } from "next/app";
import cl from "classnames";
import { PageTransition } from "next-page-transitions";
import Header from "@components/Header";
import Loader from "@components/Loader";
import MenuIcon from "react-feather/dist/icons/menu";
import XIcon from "react-feather/dist/icons/x";
import { compose } from "@utils/compose";
import { createStoreEntity } from "@store";
import { withAuth } from "@HOC/withAuth";
import Heading from "@components/Heading";
import Container from "@components/Container";
import Text from "@components/Text";
import Footer from "@components/Footer";
import withRedux from "next-redux-wrapper";
import Sidebar from "@components/Sidebar";
import { Provider } from "react-redux";
import { withThemeProvider } from "@providers/theme";
import { bindNProgress } from "@utils";
import moment from "moment";
import styles from "./styles";

bindNProgress();
moment.locale("ru");

const transitionProps = {
	timeout: 300,
	classNames: "page-transition",
	loadingComponent: <Loader />,
	loadingDelay: 500,
	loadingTimeout: {
		enter: 400,
		exit: 0
	},
	loadingClassNames: "loading-indicator"
};

class MyApp extends App {
	state = {
		sidebar: false
	};

	toggleSidebar = () => {
		this.setState(state => ({
			sidebar: !state.sidebar
		}));
	};

	render() {
		const { Component, pageProps, store } = this.props;
		const { sidebar } = this.state;

		return (
			<NextContainer>
				<Provider store={store}>
					<div
						className={cl(styles.reveal, {
							[styles.active]: sidebar
						})}
					>
						<button
							onClick={this.toggleSidebar}
							className={styles.revealButton}
						>
							{sidebar ? <XIcon /> : <MenuIcon />}
						</button>
					</div>
					<aside className={cl(styles.sidebar, { [styles.active]: sidebar })}>
						<div className={styles.sidebarInner}>
							<Sidebar />
						</div>
					</aside>

					<div className={cl(styles.page, "flex")}>
						<div className="flex flex-column grow-1">
							<header>
								<Container>
									<div className={styles.headerInner}>
										<Header />
									</div>
								</Container>
							</header>
							{Component.before}
							{Component.hero && (
								<div className={styles.hero}>
									<Container>
										<Heading className={styles.title} size={1}>
											{Component.hero.title}
										</Heading>
										<Text className={styles.description}>
											{Component.hero.description}
										</Text>
									</Container>
								</div>
							)}
							<div
								className={cl(styles.main, "grow-1", {
									[styles.centered]: Component.centered
								})}
							>
								<Container>
									<PageTransition {...transitionProps}>
										<div className={styles.content}>
											<Component {...pageProps} />
										</div>
									</PageTransition>
								</Container>
							</div>
							<div className={cl(styles.footer, "mt3")}>
								<Container>
									<Footer />
								</Container>
							</div>
						</div>
					</div>
				</Provider>
			</NextContainer>
		);
	}
}

const enhance = compose(
	withRedux(createStoreEntity),
	withAuth,
	withThemeProvider
);

export default enhance(MyApp);
