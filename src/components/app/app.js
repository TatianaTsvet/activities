import React, {Component} from 'react';
import { Container, Row, Col, Nav, Navbar, Tabs, Tab } from 'react-bootstrap';
import Details from '../details';
import ActivitiesResult from '../activities-result';
import MyList from '../my-list';
import SuccessButton from '../success-button';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueType: 'Social',
            participants: 1,
            budget: ''
        }           
    }
    
    render() {
        return(            
            <>  
            <Container justify-center mt-5 >
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Activities</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">My List</Nav.Link>     
                    </Nav>        
                </Navbar>

               {/* <Tabs id="uncontrolled-tab-example" >
                    <Tab eventKey="activities" title="Activities">
                        <ActivitiesResult />
                        <Details />
                    </Tab>
                    <Tab eventKey="mylist" title="My List">
                        <MyList />
                    </Tab>
        </Tabs>*/}

                <Container flex justify-center justify-content-around center-block>
                    <Row>  
                        <Col bg-secondary text-white xs-6 lg-3>
                            <ActivitiesResult />
                        </Col>
                        <Col bg-dark text-white xs-6 lg-3>
                            <Details 
                                sendForm={this.sendForm} />
                        </Col>
                    </Row>
                            </Container>  
                    <Row>
                         <SuccessButton/>   
                    </Row> 
                </Container>
            </>
        )
    }
}