import React from "react";
import { NavLink } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
	<div className="header">
		<ul className="navigation">
			<li>
				<NavLink activeClassName="active" exact to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName="active" exact to="/about">
					About
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName="active" exact to="/posts">
					Posts
				</NavLink>
			</li>
		</ul>
	</div>
);

export default Header;
