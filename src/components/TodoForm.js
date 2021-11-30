import React from 'react';


class TodoForm extends React.Component {
    render() {
        return (
            <div className='todo form'>
                <form>
                    <input 
                    type='text'
                    name='item'
                    />
                    <button>add</button>
                    
                </form>
                
                <button>clear</button>
            </div>
        )
    }
}

export default TodoForm;