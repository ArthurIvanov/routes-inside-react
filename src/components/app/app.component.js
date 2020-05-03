import React from "react";
import { Route, Switch } from "react-router-dom";
import "./app.styles.scss";

import HomePage from "../../pages/home-page/home-page.component";
import AboutPage from "../../pages/about-page/about-page.component";
import PostsPage from "../../pages/posts-page/posts-page.component";
import PostPage from "../../pages/post-page/post-page.component";

import Header from "../header/header.component";

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/posts" component={PostsPage} />
				<Route exact path="/posts/:id" component={PostPage} />
			</Switch>
		</div>
	);
};

export default App;
