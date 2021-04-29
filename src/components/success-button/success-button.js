import React, {Component} from 'react';
import {Button, Row} from 'react-bootstrap'; 



import './success-button.css';

export default class SuccessButton extends Component {
    
        render() {
        return (
            <> 
                <Row className="flex flex-row-reverse mt-6 ">
                    <Button 
                        className="successButton mt-5" 
                        variant="success">Activity successfully saved</Button>
                </Row>            
               
            </>
        )
    }
}

