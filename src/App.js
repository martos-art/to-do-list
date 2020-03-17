import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.newTaskTitleRef = React.createRef();
    // }
    // стейт это свойство
    // сет стейт это метод

    nextTaskId = 0;
    state = {
        tasks: [
            // { id: 1, title: "JS", isDone: true, priority: "HIGH" },
            // { id: 2, title: "ReactJS", isDone: false, priority: "LOW" },
            // { id: 3, title: "NodeJS", isDone: true, priority: "LOW" },
            // { id: 4, title: "ReactNative", isDone: false, priority: "HIGH" },
            // { id: 5, title: "Angular", isDone: true, priority: "HIGH" }
        ],
        filterValue: "All"
    };


    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "Highest"
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            // setState асинхронная функция
            tasks: newTasks
        });
    }
    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    cahngeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id === taskId) {
                return { ...t, ...obj }
            }
            else {
                return t;
            }
        });
        this.setState({
            tasks: newTasks
        })

    }

    changeStatus = (taskId, isDone) => {
        this.cahngeTask(taskId, {isDone: isDone})
    };
    changeTitle = (taskId, title) =>{
        this.cahngeTask(taskId, {title: title})
    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask} />
                    <TodoListTasks changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter(t => {
                            if (this.state.filterValue === "All") {
                                return true;
                            }
                            if (this.state.filterValue === "Completed") {
                                return t.isDone !== false;
                            }
                            if (this.state.filterValue === "Active") {
                                return t.isDone !== true;
                            }
                        })} />
                    <TodoListFooter changeFilter={this.changeFilter}
                        filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;

