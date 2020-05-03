import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./post-item.styles.scss";

const PostItem = ({ post: { title, body, id } }) => {
	let { url } = useRouteMatch();
	console.log(url);
	return (
		<div className="post-item">
			<div>
				<h3 className="post-title">{title}</h3>
				<p className="post-text">{body.substring(0, 36)}...</p>
			</div>
			<Link to={`${url}/${id}`}>Go to post</Link>
		</div>
	);
};

PostItem.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

export default PostItem;
