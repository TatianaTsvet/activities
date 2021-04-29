import React, {Component} from 'react';
import { Button, Container, ListGroup, Row } from 'react-bootstrap';



import './activities-result.css';

export default class ActivitiesResult extends Component {
    
    sendToMyList = () => {
        let rightActivity = true;
        this.props.sendToMyList(rightActivity);
    }

    render() { 
        const {activity} = this.props;
        const windowActivity = activity.activity ? activity.activity : activity.error;
        let classNamesList = "result_window";
        let classNameButton = "";
        if (activity.error) {
           classNamesList += ' error'; 
           classNameButton += 'invisible';
        }
    return (
        <>
        <Container className="flex flex-column d-flex pt-3 pb-3 ">
            <ListGroup className=" float">
            <h5>You should</h5>
                <ListGroup.Item className={classNamesList}>{windowActivity}</ListGroup.Item>
            </ListGroup>
            <Row className="mx-auto mt-5 ">
            <Button 
                variant="danger" 
                className={classNameButton}                
                type='submit'
                onClick={this.sendToMyList}>
                    Save for you later
            </Button>
            </Row>
        </Container>
       
       
        </>
        )
    }
}



