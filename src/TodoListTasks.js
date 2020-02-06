import React from 'react';
import './App.css';
import TodoListTask from './TodoListTask';

class TodoListTasks extends React.Component {
    render = () => {
        return (
            
                    <div className="todoList-tasks">
                        

                        <TodoListTask title="JS" isDone="true"/>
                        <TodoListTask title="ReactJS" isDone="false"/>
                        <TodoListTask title="NodeJS" isDone="false"/>
                        <TodoListTask title="ReactNative" isDone="false"/>

                        {/* <div className="todoList-task">
                            <input type="checkbox" checked={true}/>
                            <span>CSS</span>
                        </div>

                        <div className="todoList-task">
                            <input type="checkbox" checked={false}/>
                            <span>JS</span>
                        </div>

                        <div className="todoList-task">
                            <input type="checkbox" checked={false}/>
                            <span>ReactJS</span>
                        </div>

                        <div className="todoList-task">
                            <input type="checkbox" checked={true}/>
                            <span>Patterns</span>
                        </div> */}

                    </div>
        );
    }
}

export default TodoListTasks;

