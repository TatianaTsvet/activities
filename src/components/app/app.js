import React, {Component} from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Details from '../details';
import ActivitiesResult from '../activities-result';
import MyList from '../my-list';
import SuccessButton from '../success-button';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: {
                valueType: null,
                participants: null,
                budget: null,
                access: null,
                activity: null,
                error: null
            },
            rightActivity: false
        }           
    }
    
    onActivityFetched = (activity) => {
        this.setState({ activity: {...activity}});
        console.log(activity);
        
    }
    sendToMyList = (rightActivity) => {
        this.setState({rightActivity});
        console.log(this.state.rightActivity)
    }

    render() {
        const {activity, rightActivity} = this.state;
        const successButton = rightActivity ? <SuccessButton /> : null;
        return(            
            <>  
            <Container className="justify-center mt-5" >
                <Tabs color="grey" id="uncontrolled-tab-example" >
                    <Tab className="bg-dark text-white"
                        eventKey="activities" 
                        title="Activities">
                        <Container className="flex justify-center justify-content-around center-block">
                            <Row>  
                                <Col className="bg-secondary text-white xs-4 lg-2">
                                    <ActivitiesResult 
                                        activity={activity}
                                        sendToMyList={this.sendToMyList}/>
                                </Col>
                                <Col className="bg-dark text-white xs-6 lg-3">
                                    <Details 
                                        onActivityFetched={this.onActivityFetched} />
                                </Col>
                            </Row>
                        </Container> 
                    </Tab>
                    
                    <Tab eventKey="mylist" title="My List">
                    <Container className="flex justify-center justify-content-around center-block bg-secondary text-white">
                        <MyList/>
                    </Container> 
                    </Tab>
                </Tabs>
                {successButton}
            </Container>       
        </>
        )
    }
}