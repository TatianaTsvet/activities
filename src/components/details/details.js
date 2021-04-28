import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'; 
import DetailsType from '../details-type';
import DetailsParticipants from '../details-participants';
import DetailsBudget from '../details-budget';
import DetailsAccess from '../details-access';


import './details.css';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueType: 'Social',
            participants: 1,
            budget: '0',
            access: '0'
        }           
    }
    onUpdateBudget = (budget) => {
        this.setState({budget});
               
     }
    onChangeParticipants = (participants) => {
        this.setState({participants});        
    }
    onChangeType = (valueType) => {
        this.setState({valueType});        
    }
    onUpdateAccess = (access) => {
        this.setState({access});        
    }
    sendForm = (e) => {
        e.preventDefault();
        this.props.dataInfo = Object.assign({}, this.state);
         
        
    }
        render() {
    
        return (
            <>            
            <Form 
                className="flex flex-column d-flex pt-3 pb-3" 
                onSubmit={this.sendForm}>

                <h5>Activity details</h5>
                <DetailsType 
                    onChangeType={this.onChangeType}/>
                <DetailsParticipants  
                    onChangeParticipants={this.onChangeParticipants}/>
                <DetailsBudget 
                    onUpdateBudget={this.onUpdateBudget}/>
                <DetailsAccess 
                    onUpdateAccess={this.onUpdateAccess}/>
                <Button type="submit" variant="primary"className="mx-auto">Hit me with the new one</Button>
                
            </Form>
            </>
        )
    }
}

