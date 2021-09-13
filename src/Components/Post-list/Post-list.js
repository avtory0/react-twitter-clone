import React from "react"

import "./post-list.css"
import PostListItem from "../Post-list-item/Post-list-item";

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    )
}

export default PostList;