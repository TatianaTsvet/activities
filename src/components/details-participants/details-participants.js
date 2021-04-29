import React, {Component} from 'react';
import {Form} from 'react-bootstrap'; 


import './details-participants.css';

export default class Details extends Component {
        
        changeParticipants = (event) => {
            const participants = Number.parseInt(event.target.value);
            this.props.onChangeParticipants(participants);        
        }        
        render() {
            const {value} = this.props;              
        return (
            <Form.Group>
                <Form.Label>Participants</Form.Label>
                <Form.Control 
                    type="number"
                    value={value}
                    onChange={this.changeParticipants}  />
            </Form.Group>
                
        )
    }
}

