import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }
    state = {
        error: false,
        title: ""
    }
    onAddTaskClick = (addTask) => {
        let newText = this.state.title;
        
        if (newText === "") {
            this.setState({ error: true })
        } else {
            this.setState({ error: false,
            title: ""})
            this.props.addTask(newText)
        }
    }
    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick()
        };
    }

    onChange = (e) => {
        this.setState({ error: false,
        title: e.currentTarget.value })

    }
    render = () => {

        let classForImput = this.state.error === true ? "error" : "";

        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input className={classForImput} type="text" placeholder="New task name"
                        onKeyPress={this.onKeyPress}
                        onChange={this.onChange}

                        value={this.state.title}/>
                    <button onClick={this.onAddTaskClick} >Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

