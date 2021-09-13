import React from "react";

import AppHeader from "../App-header/App-header";
import SearchPanel from "../Search-panel/Search-panel";
import PostStatusFilter from "../Post-status-filter/Post-status-filter";
import PostList from "../Post-list/Post-list";
import PostAddForm from "../Post-add-form/Post-add-form";

import "./app.css"

const App = () => {
    return (
        <div className ="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}

export default App