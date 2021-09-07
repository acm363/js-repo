import React from 'react';

import AddTask from './addTask.jsx';
import Todo from './todo.jsx';
import Done from './done.jsx';

import '../assets/style/taskApp.css';
import tasksData from '../data/tasksData.js';

/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskListToDo : [],
      taskListDone : []
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.MoveTaskToDoneList =  this.MoveTaskToDoneList.bind(this);
    this.changeTaskPriority = this.changeTaskPriority.bind(this);
  }

  /**
   * change la priorité d'une tâche présente dans la liste des tâches à faire
   * @param {string} id un composant de type Task
   * @param {number} level_ le niveau de priorité à attribuer a la tâche
   */
  changeTaskPriority(id,level_){
    const task_ = this.state.taskListToDo.find(task => task.id === id);//on recherche dans la liste des taches, la tache correspondant à l'id
    this.setState(
          prevState => ({
            taskListToDo : [...prevState.taskListToDo.filter(task => task.id !== task_.id),
                                  {
                                    id : task_.id,
                                    description : task_.description,
                                    duration : task_.duration,
                                    priority : level_  //on modifie la priorité dans l'objet task concerné
                                  }
                                ]
          })
    );
}

  /*permet d'ajouter une nouvelle tâche à la liste des tâches existantes */
  /**
   * @param {string} descrip la description de la tâche
   * @param {Number} dur  la durée de la tâche
   */
  handleAddTask(descrip,dur){
   this.setState(
        prevState => ({
                taskListToDo : [...prevState.taskListToDo,{
                                id : "T"+(prevState.taskListToDo.length+prevState.taskListDone.length+1),
                                description : descrip,
                                duration : dur,
                                priority : 1
                              }]
      })
    );
  }

  MoveTaskToDoneList(id){
    const task = this.state.taskListToDo.filter(task_ => task_.id === id)
    this.setState(
      //prevState.taskListToDo.splice(prevState.taskListToDo.indexOf(task),1)
      prevState => ({
            taskListToDo : prevState.taskListToDo.filter(task_ => task_.id !== id),//deux tâches différentes n'ont pas la même id
            taskListDone : [...prevState.taskListDone,...task]
     })
    );
  }


  componentDidMount() {
    this.setState({
      taskListToDo : Array.from(tasksData,
        task => ({...task,priority :1 })
        )
    });
  }


  render() {
    return (
      <div className="taskApp">
        <AddTask taskListToDo = {this.state.taskListToDo} handleAddTask={this.handleAddTask}/>
        <Todo taskListToDo = {this.state.taskListToDo} MoveTaskToDoneList ={this.MoveTaskToDoneList} changeTaskPriority={this.changeTaskPriority}/>
        <Done taskListDone = {this.state.taskListDone} />
      </div>
    );
  }
}
