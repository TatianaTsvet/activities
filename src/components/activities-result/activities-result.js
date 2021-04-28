import React, {Component} from 'react';
import { Button, Container, ListGroup, Row } from 'react-bootstrap';
import ActivityService from '../../services/activityService';

import './activities-result.css';

export default class ActivitiesResult extends Component {
    
    state = {
        valueType: null,
        participants: null,
         budget: null        
    }
    ActivityService = new ActivityService();
    
    
    
        render() { 
       
    return (
        <Container className="flex flex-column d-flex pt-3 pb-3 ">
            <ListGroup className=" float">
            <h5>You should</h5>
                <ListGroup.Item>Mow your neighbor's lawn</ListGroup.Item>
            </ListGroup>
            <Row>
            <Button variant="danger" className="mx-auto mt-5">Save for you later</Button>
            </Row>
        </Container>
        )
    }
}

