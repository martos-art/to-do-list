import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }
    // стейт это свойство
    // сет стейт это метод
    state = {
        tasks: [
            { title: "JS", isDone: true, priority: "HIGH" },
            { title: "ReactJS", isDone: false, priority: "LOW" },
            { title: "NodeJS", isDone: true, priority: "LOW" },
            { title: "ReactNative", isDone: false, priority: "HIGH" },
            { title: "Angular", isDone: true, priority: "HIGH" }
        ],
        filterValue: "All"
    };

    onAddTaskClick = () => {
        let title = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        let newTask = {
            title: title,
            isDone: true,
            priority: "HIGEST"
        };
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            // setState асинхронная функция
            tasks: newTasks
        });
    }

    render = () => {

        return (
            <div className="App">
                <div className="todoList">

                    <TodoListHeader onAddTaskClick={this.onAddTaskClick}
                                    newTaskTitleRef={this.newTaskTitleRef} />

                    <TodoListTasks tasks={this.state.tasks} />
                    <TodoListFooter filterValue={this.state.filterValue} />

                </div>
            </div>
        );
    }
}

export default App;

