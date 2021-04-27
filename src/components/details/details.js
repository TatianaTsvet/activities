import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'; 
import DetailsType from '../details-type';
import DetailsParticipants from '../details-participants';
import DetailsBudget from '../details-budget';


import './details.css';

export default class Details extends Component {

        render() {
        return (
            <>            
            <Form flex flex-column d-flex>
                <h5>Activity details</h5>
                <DetailsType />
                <DetailsParticipants />
                <DetailsBudget onUpdateBudget={this.onUpdateBudget}/>
                
                <Button variant="primary">Hit me with the new one</Button>
                
            </Form>
            </>
        )
    }
}

