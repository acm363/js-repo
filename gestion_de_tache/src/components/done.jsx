import React from 'react';

import DoneTask from './doneTask.jsx';
import '../assets/style/tasklist.css';

export default class Done extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            hideTasksDone : true /*pour définir l'état visible ou non des tâches finies */
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //si hideTaskDone vaut true à l'appel à handleClick via le click sur le boutton
        //elle passe à false ou vice-versa(les tâches finies sont affichées si hideTasksDone vaut true)
        this.setState(prevState => ({hideTasksDone : !prevState.hideTasksDone}));
    }
 

    render(){
        const taskListDone = this.props.taskListDone.map(
            taskDone => <DoneTask 
                        {...taskDone}
                        key ={taskDone.id} 
                        />
        )
   
        const hideTasksComponent = this.state.hideTasksDone ? null : taskListDone ;//si l'état visible du composant passe à true 
        //on affiche les tâches terminées sinon rien n'est affichée
        //le texte du boutton s'en trouve aussi affecté
        const buttonText = this.state.hideTasksDone ?  `+(${this.props.taskListDone.length})` : "-";

        return (
           <div className="tasklist">
               <h3>Tâches terminées 
                    <button onClick ={this.handleClick}>{buttonText}</button>
                    {hideTasksComponent}
               </h3>
               
           </div>
        )
    }
}