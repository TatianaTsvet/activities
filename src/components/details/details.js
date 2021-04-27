import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'; 
import DetailsType from '../details-type';
import DetailsParticipants from '../details-participants';
import DetailsBudget from '../details-budget';


import './details.css';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueType: '',
            participants: '',
            budget: ''
        }           
    }
    onUpdateBudget = (budget) => {
        this.setState({budget});
        console.log(budget)
     }
    onChangeParticipants = (participants) => {
        this.setState({participants});
        console.log(participants);
    }
    onChangeType = (valueType) => {
        this.setState({valueType})
    }
    sendForm = () => {
        this.props.sendForm(this.state.valueType, this.state.participants, this.state.budget)
    }
        render() {
        return (
            <>            
            <Form flex flex-column d-flex onSubmit={this.sendForm}>
                <h5>Activity details</h5>
                <DetailsType 
                    onChangeType={this.onChangeType}/>
                <DetailsParticipants  
                    onChangeParticipants={this.onChangeParticipants}/>
                <DetailsBudget 
                    onUpdateBudget={this.onUpdateBudget}/>
                
                <Button variant="primary">Hit me with the new one</Button>
                
            </Form>
            </>
        )
    }
}

