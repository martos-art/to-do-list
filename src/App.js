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
    componentDidMount() {
        this.restoreState();
    }
    
    
    state = {
        tasks: [
            // { id: 1, title: "JS", isDone: true, priority: "HIGH" },
            // { id: 2, title: "ReactJS", isDone: false, priority: "LOW" },
            // { id: 3, title: "NodeJS", isDone: true, priority: "LOW" },
            // { id: 4, title: "ReactNative", isDone: false, priority: "HIGH" },
            // { id: 5, title: "Angular", isDone: true, priority: "HIGH" }
        ],
        filterValue: "All",
        nextTaskId: 0
    };
    addTask = (newText) => {
        let newTask = {
            id: this.state.nextTaskId,
            title: newText,
            isDone: false,
            priority: "Highest"
        };
        this.state.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        },() => this.saveState());
        
    }
    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }
    changeTask = (taskId, obj) => {
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
        }, () => {this.saveState();});
    }
    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, { isDone: isDone })
    };
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, { title: title })
    };



    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state", stateAsString);
    }
    restoreState = () => {
       let state = {
            tasks: [],
            filterValue: "All"
        };

        let stateAsString = localStorage.getItem("our-state");

        if (stateAsString != null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state);
    }

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

