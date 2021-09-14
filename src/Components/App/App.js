import React, { Component } from "react";

import AppHeader from "../App-header/App-header";
import SearchPanel from "../Search-panel/Search-panel";
import PostStatusFilter from "../Post-status-filter/Post-status-filter";
import PostList from "../Post-list/Post-list";
import PostAddForm from "../Post-add-form/Post-add-form";

import "./app.css"




export default class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label:'going to learn React', important:true, id:'sgf'},
                {label:'That is so good', important:false, id:'sgsda'},
                {label:'I need a break...', important:false, id:'ireq'},
                {label:'chill', important:false, id:'fsdfs'},
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 4;
    }
    
    deleteItem(id) {
        this.setState(({data}) => ({
            data : data.filter(item => item.id !== id)
        }));
    }

    addItem(body) {
        const newItem ={
            label:body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        })
    }

    render() {
        return (
            <div className ="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data}
                onDelete={this.deleteItem}/>
                <PostAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

