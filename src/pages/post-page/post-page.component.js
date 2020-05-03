import React from "react";
import "./post-page.styles.scss";
import { useParams, Link } from "react-router-dom";
import { POSTS } from "../../services/posts";

const PostPage = () => {
	let { id } = useParams();
	let count = parseInt(id) - 1;
	const post = POSTS[count];

	return (
		<div className="post-item">
			<div>
				<h3 className="post-title">{post.title}</h3>
				<p className="post-text">{post.body}</p>
			</div>
			<Link to="/posts">Back</Link>
		</div>
	);
};

export default PostPage;
