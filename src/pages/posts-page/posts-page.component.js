import React from "react";
import "./posts-page.styles.scss";

import PostsList from "../../components/posts-list/posts-list.component";

const PostsPage = () => {
	return (
		<div className="posts-page">
			<h1 className="title">Posts page</h1>
			<PostsList />
		</div>
	);
};

export default PostsPage;
