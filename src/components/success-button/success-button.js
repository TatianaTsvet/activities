import React, {Component} from 'react';
import {Button} from 'react-bootstrap'; 



import './success-button.css';

export default class SuccessButton extends Component {
    
        render() {
        return (
            <>            
               <Button className="successButton mt-5" variant="success">Activity successfully saved</Button>
            </>
        )
    }
}

