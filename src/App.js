import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {

    tasks = [
        {title:"JS", isDone: true, priority: "HIGH"},
        {title:"ReactJS", isDone: false, priority: "LOW"},
        {title:"NodeJS", isDone: true, priority: "LOW"},
        {title:"ReactNative", isDone: false, priority: "HIGH"},
        {title:"Angular", isDone: true, priority: "HIGH"}
    ];

    filterValue = "Active";

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    
                    <TodoListHeader/>                    
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>

                </div>
            </div>
        );
    }
}

export default App;

