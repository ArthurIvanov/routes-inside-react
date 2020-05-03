import React from "react";
import "./posts-list.styles.scss";

import { POSTS } from "../../services/posts";
import PostItem from "../post-item/post-item.component";

const PostsList = () => {
	return (
		<div className="posts-list">
			{POSTS.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</div>
	);
};

export default PostsList;
