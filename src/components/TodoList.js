import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {

    
    
    render(){

        // console.log(this.props)

        return(
            <div>
                {this.props.todos.map(item => {
                    <Todo key={item.id} item={item}/>
                })}
            </div>
        )
    }
}

export default TodoList; 

