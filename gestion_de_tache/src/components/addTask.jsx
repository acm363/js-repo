import React from 'react';

import '../assets/style/addtask.css';

export default class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.inputTextRef = React.createRef();
        this.inputNumberRef = React.createRef();
        this.handleInputs = this.handleInputs.bind(this);
    }

    /*récupère les données des inputs via leur référence pour les ajouter dans la liste des tâches  */
    handleInputs(){
       this.props.handleAddTask(this.inputTextRef.current.value,
                                parseInt(this.inputNumberRef.current.value));
    }
    render(){
        return (
            <div className="addTask">
                <input type="text"  placeholder="description" ref={this.inputTextRef}/>
                <input type="number"  min = {0} placeholder="10" ref={this.inputNumberRef} />mn
                <button onClick={this.handleInputs}>add</button>
            </div>
        )
    }
}