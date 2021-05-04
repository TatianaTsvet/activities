import React, {Component} from 'react';
import { Button, Container, ListGroup, Row } from 'react-bootstrap';



import './activities-result.css';

export default class ActivitiesResult extends Component {
    
    sendToMyList = () => {
        const {randomActivity} = this.props;        
        this.props.addItem(randomActivity);
        this.props.setShow(true);     
    }
    render() { 
        const {randomActivity} = this.props;
        const windowActivity = randomActivity.activity ? randomActivity.activity : randomActivity.error;
        let classNamesList = "result_window";
        let classNameButton = "";
        let invitation = "";
        if (!randomActivity.error && !randomActivity.activity) {
            invitation = "Choose any activity";
            classNamesList = ' invitation';
            classNameButton += 'invisible';
        }

        if (randomActivity.error) {
           classNamesList += ' error'; 
           classNameButton += 'invisible';
        }
    return (
        <>
        <Container className="flex flex-column d-flex pt-3 pb-3 ">
            <ListGroup className=" float">
            <h5 className="text-white">You should</h5>
                <ListGroup.Item className={classNamesList}>{windowActivity} {invitation}</ListGroup.Item>
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



