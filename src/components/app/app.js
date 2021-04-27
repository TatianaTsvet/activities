import React, {Component} from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Details from '../details';
import ActivitiesResult from '../activities-result';
import DetailsType from '../details-type';
import DetailsParticipants from '../details-participants';
import DetailsBudget from '../details-budget';

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
    onUpdateBudget = (budget) => {
        this.setState({budget: budget});
        console.log(this.state.budget);
     }
    onChangeParticipants = (participants) => {
        this.setState({participants: participants});
        console.log(this.state.participants);
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
                
                <Container flex justify-center justify-content-around center-block>
                    <Row>  
                        <Col bg-secondary text-white xs-6 lg-3><ActivitiesResult /></Col>
                        <Col bg-dark text-white xs-6 lg-3>
                            <Details 
                                 onUpdateBudget={this.onUpdateBudget}
                                 onChangeParticipants={this.onChangeParticipants}/>
                        </Col>
                    </Row>
                            </Container>   
                </Container>
            </>
        )
    }
}