import React from "react";


class Todo extends React.Component {

    onClick = () => {
        this.props.onChange(this.props.todo);
    };

    render() {
        return(
            <div>
                <h3 onClick={this.onClick}>{this.props.todo.task}</h3>
            </div>
        );
    };
}

export default Todo;