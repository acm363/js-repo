import React from 'react';

import '../assets/style/doneButton.css';

export default class DoneButton extends React.Component{
    constructor(props){
        super(props);
    
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.moveTask(this.props.id);
    }

    render(){
     return (
         <div className="doneButton" onClick={this.handleClick}>
            &#10004;
         </div>
     )
    }
}