import React, {Component} from 'react';
import {Form} from 'react-bootstrap'; 


import './details-type.css';

export default class DetailsType extends Component {
        constructor(props) {
            super(props);
            this.state = {
                type: [
                    'Education',
                    'Recreational',
                    'Social',
                    'DIY',
                    'Charity',
                    'Cooking',
                    'Relaxation',
                    'Music',
                    'Busy work'
                ],
                valueType: 'Social',  
            }            
        }
        changeSelect = (event) => {
           this.setState({valueType: event.target.value});
           this.props.onChangeType(this.state.valueType);
        }       
        
        render() {
            const {type, valueType} = this.state;
            const types = type.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
            });
        return (
            <Form.Group>
                <Form.Label>Custom select</Form.Label>
                <Form.Control as="select" custom
                    value={valueType}
                    onChange={this.changeSelect}>
                    {types}
                    
                </Form.Control>
            </Form.Group>
           
        )
    }
}

