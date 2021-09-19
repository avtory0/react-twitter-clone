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
                {label:'going to learn React', important:true, like: false, id:'sgf'},
                {label:'That is so good', important:false, like: false, id:'sgsda'},
                {label:'I need a break...', important:false, like: false, id:'ireq'},
                {label:'chill', important:false, like: false, id:'fsdfs'},
            ],
            term : '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
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

    onToggleImportant(id) {
        this.setState(({data}) => {
            return {
                data: data.map((item) => {
                    const importantItem = {...item}
                    if (importantItem.id === id) {
                        importantItem.important = !importantItem.important;
                    }
    
                    return importantItem;
                })
            }

        })
    }

    onToggleLike(id) {
       this.setState(({data}) => {
            return {
                data: data.map(item => {
                    const likedItem = {...item}          
                    if (likedItem.id === id) {
                        likedItem.like = !likedItem.like;
                    }
                    return likedItem;
                })
            }
        });
        
    }

    searchPost(item, term) {
        if(term.length === 0 ) {
            return item
        }

        return item.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost(item, filter) {
        if(filter === 'like') {
            return item.filter(item => item.like)
        } else {
            return item
        }

    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visibleItem = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className ="app">
                <AppHeader 
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <PostStatusFilter 
                        filter={filter} 
                        onFilterSelect = {this.onFilterSelect}/>
                </div>
                <PostList posts={visibleItem}
                    post = {visibleItem}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

