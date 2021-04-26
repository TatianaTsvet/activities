import React, {Component} from 'react';
import {} from 'react-bootstrap'; 


import './details.css';

export default class Details extends Component {
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
                value: 'Social'
            }
            this.changeSelect = this.changeSelect.bind(this);
        }
        changeSelect(event) {
            this.setState({value: event.targrt.value});
        }
        render() {
            const {type, value} = this.state;
            const types = type.map((item, index) => {
                return <option key={index} value={index}>{item}</option>
            });
        return (
            <div>
                <p>Activity details</p>
                <label for="type">Type</label>
                <select
                    value={this.state.value}
                    onChange={this.changeSelect}
                    id="type">
                    {types}
                </select>
                <label for="participants">Participants</label>
                <input 
                    type="number" 
                    value="1" 
                    id="participants" />
                <label for="budget">max.budget</label>
                <input 
                    type="range" 
                    value="1" 
                    id="budget"
                    min="0"
                    max="1" />
                <button>Hit me with the new one</button>
            </div>
        )
    }
}

