import React from "react";

import AppHeader from "../App-header/App-header";
import SearchPanel from "../Search-panel/Search-panel";
import PostStatusFilter from "../Post-status-filter/Post-status-filter";
import PostList from "../Post-list/Post-list";
import PostAddForm from "../Post-add-form/Post-add-form";

import "./app.css"



const App = () => {

    const data =[
        {label:'going to learn React', important:true, id:'sgf'},
        {label:'That is so good', important:false, id:'sgsda'},
        {label:'I need a break...', important:false, id:'ireq'},
    ]

    return (
        <div className ="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App