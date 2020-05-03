import React from "react";
import "./about-page.styles.scss";

import Content from "../../components/content/content.component";

const AboutPage = () => {
	return (
		<div>
			<h1 className="title">About page</h1>

			<Content color={"#dbe9e8"} />
		</div>
	);
};

export default AboutPage;
