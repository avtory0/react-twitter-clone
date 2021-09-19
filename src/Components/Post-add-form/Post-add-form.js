import React, {Component} from "react";

import "./post-add-form.css"

export default class PostAddForm extends Component{
    constructor(porps) {
        super(porps);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    className="form-control new-post-label" 
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    onChange ={this.onValueChange}
                    value={this.state.text}/>
    
                <button 
                    type="submit"
                    className="btn btn-outline-secondary">
                Добавить
                </button>
            </form>
        )
    }
}

