import React, {Component} from 'react';
import {Form} from 'react-bootstrap'; 


import './details-participants.css';

export default class Details extends Component {
        constructor(props) {
            super(props);
            this.state = {
                participants: 1
            }            
        }
        changeParticipants = (event) => {
            this.setState({participants: event.target.value});
            this.props.onChangeParticipants(this.state.participants);        
        }        
        render() {
            const {participants} = this.state;
            
        return (
            <Form.Group>
                <Form.Label>Participants</Form.Label>
                <Form.Control 
                    type="number"
                    value={participants}
                    onChange={this.changeParticipants}  />
            </Form.Group>
                
        )
    }
}

