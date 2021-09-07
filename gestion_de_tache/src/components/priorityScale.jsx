import { array } from 'prop-types';
import React from 'react';
import PriorityLevel from './priorityLevel.jsx';
import '../assets/style/priorityScale.css';

export default class PriorityScale extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
            /*on ajoute une propriété 'on' à PriorityLevel pour gérer la couleur des PriorityLevel */
            const priorityLevels = [];
            for(let levelValue = this.props.initialLevel; levelValue<=this.props.nbLevels ; levelValue++){
                priorityLevels.push( 
                        <PriorityLevel 
                            key={levelValue} 
                            priorityLevel = {levelValue}
                            changePriorityLevel = {this.props.changePriorityLevel}
                            on={ 
                                this.props.level >=levelValue ? true : false
                            }/> 
                     )
            }
            
            return (
            
                <div className="scale">
                    {priorityLevels}
                </div>
     )
    }
}