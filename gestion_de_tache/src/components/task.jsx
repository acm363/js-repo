import React from 'react';
import PriorityScale from './priorityScale.jsx';
import DoneButton from './doneButton.jsx';
import '../assets/style/task.css';

export default class Task extends React.Component{
    constructor(props){
        super(props);
        this.moveTask = this.moveTask.bind(this);
        this.changePriorityLevel = this.changePriorityLevel.bind(this);
    }

    changePriorityLevel(level_){
        this.props.changeTaskPriority(this.props.id,level_);
    }

    moveTask(id){

       /* const task = {
            id : this.props.id,
            description : this.props.description,
            duration : this.props.duration,
            priority : this.props.priority
        }*/

        this.props.MoveTaskToDoneList(id);
    }

    render(){
        return (
            <div className="task">
                <div className="info">
                    {this.props.description}({this.props.duration} mn)
                </div>
                <PriorityScale 
                    initialLevel={1} 
                    level={this.props.priority} 
                    nbLevels={6}
                    changePriorityLevel ={this.changePriorityLevel}
                />
                ({this.props.priority})
                <DoneButton moveTask={this.moveTask} id={this.props.id}/>
            </div>
        )
    }
}