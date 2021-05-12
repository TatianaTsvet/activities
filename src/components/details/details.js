import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'; 
import DetailsType from '../details-type';
import DetailsParticipants from '../details-participants';
import DetailsBudget from '../details-budget';
import DetailsAccessability from '../details-accessability';
import ActivityService from '../../services/activityService';
import Spinner from '../spinner';

import './details.scss';


export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'Choose any type',
            participants: 1,
            minprice: 0,
            maxprice: 1,
            accessability: 0
        }           
    }

    ActivityService = new ActivityService();

    onUpdateBudget = (minprice, maxprice) => {
        this.setState({minprice, maxprice});    
    }    
    onChangeParticipants = (participants) => {
        this.setState({participants});   
    }
    onChangeType = (type) => {
        this.setState({type}); 
    }
    onUpdateAccessability = (accessability) => {
        this.setState({accessability});  
    }
    sendForm = async (event) => {
        event.preventDefault();  
        this.props.switchSpinner(true);
               
        const activity = await this.ActivityService.getActivity(this.state);
        this.props.onActivityFetched(activity);
        if(!activity.error) {
            this.props.changeError(false);
        } 
    }
        render() {
            const {type, participants, minprice, maxprice, accessability} = this.state;
            const {loading} = this.props;
        return (                      
            <Form 
                className="flex flex-column d-flex pt-3 pb-3" 
                onSubmit={this.sendForm}>
                <h5 className="text-white">Activity details</h5>
                <DetailsType 
                    onChangeType={this.onChangeType}
                    type={type}/>
                <DetailsParticipants  
                    onChangeParticipants={this.onChangeParticipants}
                    value={participants}/>
                <DetailsBudget 
                    onUpdateBudget={this.onUpdateBudget}
                    minValue={minprice}
                    maxValue={maxprice}/>
                <DetailsAccessability 
                    onUpdateAccessability={this.onUpdateAccessability}
                    value={accessability}/>
                {loading ? <Spinner /> : <>
                    <Button 
                    type="submit" 
                    variant="primary"
                    className="mx-auto mt-2"
                    >Hit me with the new one</Button>
                </>}
            </Form>
           
        )
    }
}

