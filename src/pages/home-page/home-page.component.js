import React from "react";
import "./home-page.styles.scss";

import Content from "../../components/content/content.component";

const HomePage = () => {
	return (
		<div className="home-page">
			<h1 className="title">Home page</h1>
			<Content color={"#e9e9e9"} />
		</div>
	);
};

export default HomePage;
