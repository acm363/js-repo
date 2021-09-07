import React from 'react';

import Task from './task.jsx';
import '../assets/style/tasklist.css';

export default class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText : "",
        };
       
        this.handleFilterInputChanges = this.handleFilterInputChanges.bind(this);
    }

    taskDone(){
        this.setState({taskDoneState : true});   
    }

    handleFilterInputChanges(event){
        this.setState({filterText : event.target.value})
    }


    render(){
        const taskList = this.props.taskListToDo.filter( /*mis en place du filtre */
                                    task => task.description.includes(this.state.filterText.toLowerCase())
                                ).map(
                                    task => <Task 
                                                {...task}
                                                key ={task.id} 
                                                MoveTaskToDoneList =  {this.props.MoveTaskToDoneList}
                                                changeTaskPriority = {this.props.changeTaskPriority}
                                                />
        );
                                    
        /*on calcule la somme total des durées des tâches à afficher ainsi que leur nombre total */
        const taskDuration = taskList.reduce((total,taskComponent)=>total+taskComponent.props.duration,0);
        const nbTasks = taskList.length;
        
        return (
           <div className="tasklist">
               <h3>Tâches en cours</h3>
               <input type="text" placeholder="filtre" value={this.state.filterText} onChange={this.handleFilterInputChanges}/>
               <div className="infoTask">Il y a {nbTasks} tâches en cours pour une durée de {taskDuration} mn.</div>
               {taskList.sort(
                   (taskComponent1,taskComponent2) => taskComponent2.props.priority - taskComponent1.props.priority
                   )}
           </div>
        )
    }
}