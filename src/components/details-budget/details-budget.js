import React, {Component} from 'react';
import {Form} from 'react-bootstrap'; 


import './details-budget.css';

export default class DetailsBudget extends Component {
        constructor(props) {
            super(props);
            this.state = {
                budget: 0
            }
            
        }
        changeBudget = (event) => {
            this.setState({budget: event.target.value});
            this.props.onUpdateBudget(this.state.budget);
        }

        render() {
            const {budget} = this.state;
        return (
            <Form.Group >
            <Form.Label>max.budget</Form.Label>
            <Form.Control 
                type="range"
                value={budget}
                min="0"
                max="1" 
                step="0.01"
                onChange={this.changeBudget} />
          </Form.Group>
        )
    }
}

