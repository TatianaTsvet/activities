import React, {Component} from 'react';
import {Form} from 'react-bootstrap'; 


import './details-access.css';

export default class DetailsAccess extends Component {
        
        changeAccess = (event) => {
            const access = Number.parseFloat(event.target.value).toFixed(1);
            this.props.onUpdateAccess(access);
        }

        render() {
            const {value} = this.props;
        return (
            <Form.Group >
            <Form.Label>accessability</Form.Label>
            <Form.Control 
                type="range"
                value={value}
                min="0"
                max="1" 
                step="0.01"
                onChange={this.changeAccess} />
          </Form.Group>
        )
    }
}

