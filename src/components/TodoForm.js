

import React from "react";


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
    };

    handleInput = evt => {
        this.setState({
            ...this.state,
                input: evt.target.value
        });
    };

    onSubmit = evt => {
        evt.preventDefault();
        this.props.handleSubmit(this.state.input)
        this.setState({
            input:""
        });
    };

    onClick = () => {
        this.props.handleClear()
    };

    render(){
        // console.log(this.props)
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="todoInput">Add new Todo:&nbsp;</label>
                    <input
                        type="text"
                        name="todoInput"
                        value={this.state.input}
                        onChange={this.handleInput}
                    />
                    <button>submit</button>
                </form>
                <button onClick={this.onClick}>Clear all</button>
            </div>
        );
    };
}

export default TodoForm;