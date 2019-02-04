import React from "react";
import App, { Container } from "next/app";
import cl from "classnames";
import { PageTransition } from "next-page-transitions";
import Header from "@components/Header";
import { compose } from "@utils/compose";
import Footer from "@components/Footer";
import Sidebar from "@components/Sidebar";
import { withThemeProvider } from "@providers/theme";
import { bindNProgress } from "@utils";
import moment from "moment";
import styles from "./styles";

bindNProgress();
moment.locale("ru");

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {
			pageProps
		};
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<aside className={styles.sidebar}>
					<div className="p2">
						<Sidebar />
					</div>
				</aside>
				<div className={cl(styles.page, "flex")}>
					<div className="flex flex-column grow-1">
						<header>
							<div className={cl(styles.container, "p2")}>
								<Header />
							</div>
						</header>
						<div className={cl(styles.main, "grow-1")}>
							<div className={cl(styles.container, "p2")}>
								<PageTransition timeout={300} classNames="page-transition">
									<Component {...pageProps} />
								</PageTransition>
							</div>
						</div>
						<footer className={styles.footer}>
							<div className={cl(styles.container, "p2")}>
								<Footer />
							</div>
						</footer>
					</div>
				</div>
			</Container>
		);
	}
}

const enhance = compose(withThemeProvider);

export default enhance(MyApp);
