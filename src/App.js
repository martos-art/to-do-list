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

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: true,
            priority: "HIGEST"
        };
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
    
    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if (t != task) {
                return t;
            } else {
                return {...t, isDone: isDone}
            }
        });
        this.setState({
            tasks: newTasks
        })
    };

    // changeStatus = (task, i) => {
    //     let newTasks = this.state.tasks.map(t => {
    //         if (t == task){
    //             return {...t, isDone: i};
    //         }
    //         return t;
    //     });
    //     this.setState( {
    //         tasks: newTasks
    //     })
    // }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks  changeStatus={this.changeStatus}
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

