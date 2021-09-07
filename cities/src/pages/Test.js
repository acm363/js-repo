import React from 'react';
import { Button } from 'react-bootstrap';

const Test = (props) => {
    return (
        <div>
            <Button variant="success" size ="lg" onClick={()=>{
                props.setVal(props.val *2)
            }} >Click me</Button>
        </div>
    );
};

export default Test;