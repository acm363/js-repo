import PropTypes from 'prop-types';
import React from 'react';

import '../assets/style/priorityLevel.css';

export default class PriorityLevel extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.changePriorityLevel(this.props.priorityLevel);
    }

    render(){
        /*on change la classe en fonction du niveau de priorité */
        const levelStateDiv = this.props.on ? "level on" : "level off";
        return (
               <div className= {levelStateDiv} onClick={this.handleClick}>
               </div>
           );
    }
}