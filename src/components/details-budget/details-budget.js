import React, {Component} from 'react';
import {Form} from 'react-bootstrap'; 


import './details-budget.css';

export default class DetailsBudget extends Component {

        changeBudget = (event) => {
            const budget = Number.parseFloat(event.target.value).toFixed(1);    
            this.props.onUpdateBudget(budget);            
        }

        render() {
            const {value} = this.props;
        return (
            <Form.Group >
            <Form.Label>max.budget</Form.Label>
            <Form.Control 
                type="range"
                value={value}                
                min="0"
                max="1" 
                step="0.01"
                onChange={this.changeBudget} />
          </Form.Group>
        )
    }
}

