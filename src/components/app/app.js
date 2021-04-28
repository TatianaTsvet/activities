import React, {Component} from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom" 
import Details from '../details';
import ActivitiesResult from '../activities-result';
import MyList from '../my-list';
import SuccessButton from '../success-button';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueType: '',
            participants: '',
            budget: '',
            access: '',
        }           
    }
    
    
    
    render() {
        
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
                                    <ActivitiesResult />
                                </Col>
                                <Col className="bg-dark text-white xs-6 lg-3">
                                    <Details 
                                        dataInfo={this.dataInfo} />
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
                <Row className="flex flex-row-reverse mt-6 ">
                                <SuccessButton/>   
                            </Row> 
            </Container>       
            </>
        )
    }
}