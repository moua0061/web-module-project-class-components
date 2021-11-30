

import React from "react";
import Todo from "./Todo";


class TodoList extends React.Component {
    render() {
        return(
                this.props.todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} onChange={this.props.onChange}/>
                })
        );
    }
}

export default TodoList;

