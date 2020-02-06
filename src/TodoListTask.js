import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    render = () => {
        return (
            

                        <div className="todoList-task">
                            <input type="checkbox" checked={this.props.isDone}/>
                            <span>{this.props.title}</span>
                        </div>
        )

                        

     }
}

export default TodoListTask;

