import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Details from '../details';
import ActivitiesResult from '../activities-result';

import './app.css';

export default class App extends Component {
    render() {
        return(            
            <>
                <Container fluid="sm">
                    <Row>
                        <Col xs lg="2"><ActivitiesResult /></Col>
                        <Col xs lg="2"><Details /></Col>
                    </Row>
                </Container>
            </>
        )
    }
}