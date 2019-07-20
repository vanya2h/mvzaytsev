import React from "react";
import HeadComp from "next/head";
import Head from "./components/Head";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

const IndexPage = () => (
  <React.Fragment>
    <HeadComp>
      <title>Максим Зайцев - личный сайт</title>
    </HeadComp>
    <AboutMe />
    <div className="mt2">
      <Footer />
    </div>
  </React.Fragment>
);

IndexPage.before = <Head />;

export default IndexPage;
