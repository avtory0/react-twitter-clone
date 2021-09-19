import React from "react"

import "./post-list.css"
import PostListItem from "../Post-list-item/Post-list-item";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    const elements = posts.map((item) => {
        if(typeof item === 'object') {
            const {id, ...itemProps} = item
            return(
                <li key={id} className="list-group-item">
                    {/* <PostListItem 
                        label={item.label}
                        important={item.important}/> */}

                    <PostListItem {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLike={() => onToggleLike(id)}/>
                </li>
            )
        }
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;