import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'; 
import DetailsType from '../details-type';
import DetailsParticipants from '../details-participants';
import DetailsBudget from '../details-budget';
import DetailsAccess from '../details-access';
import ActivityService from '../../services/activityService';

import './details.css';


export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueType: 'Social',
            participants: 1,
            minBudget: 0,
            maxBudget: 1,
            access: 0,
            availableTypes: [
                'Education',
                'Recreational',
                'Social',
                'DIY',
                'Charity',
                'Cooking',
                'Relaxation',
                'Music',
                'Busy work'
            ]
        }           
    }

    ActivityService = new ActivityService();

    onUpdateBudget = (minBudget, maxBudget) => {
        this.setState({minBudget, maxBudget});           
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
    sendForm = async (event) => {
        event.preventDefault();   
        const {valueType, participants, minBudget, maxBudget, access} = this.state;
        const activity = await this.ActivityService.getActivity(valueType, participants, minBudget, maxBudget, access);
        this.props.onActivityFetched(activity);
    }
        render() {
            const {valueType, participants, minBudget, maxBudget, access, availableTypes} = this.state;
        return (
            <>            
            <Form 
                className="flex flex-column d-flex pt-3 pb-3" 
                onSubmit={this.sendForm}>
                <h5 className="text-white">Activity details</h5>
                <DetailsType 
                    onChangeType={this.onChangeType}
                    availableTypes={availableTypes}
                    value={valueType}/>
                <DetailsParticipants  
                    onChangeParticipants={this.onChangeParticipants}
                    value={participants}/>
                <DetailsBudget 
                    onUpdateBudget={this.onUpdateBudget}
                    minValue={minBudget}
                    maxValue={maxBudget}/>
                <DetailsAccess 
                    onUpdateAccess={this.onUpdateAccess}
                    value={access}/>
                <Button 
                    type="submit" 
                    variant="primary"
                    className="mx-auto mt-2"
                    >Hit me with the new one</Button>
                
            </Form>
            </>
        )
    }
}

