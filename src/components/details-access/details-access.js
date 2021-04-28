import React, {Component} from 'react';
import {Form} from 'react-bootstrap'; 


import './details-access.css';

export default class DetailsAccess extends Component {
        constructor(props) {
            super(props);
            this.state = {
                access: 0
            }
            
        }
        changeAccess = (event) => {
            this.setState({access: event.target.value});
            this.props.onUpdateAccess(this.state.access);
        }

        render() {
            const {access} = this.state;
        return (
            <Form.Group >
            <Form.Label>accessability</Form.Label>
            <Form.Control 
                type="range"
                value={access}
                min="0"
                max="1" 
                step="0.01"
                onChange={this.changeAccess} />
          </Form.Group>
        )
    }
}

