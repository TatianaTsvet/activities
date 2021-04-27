import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';

import './activities-result.css';

const ActivitiesResult = () => {
    return (
        <Container flex flex-column>
            <h5>You should</h5>
            <ListGroup>
                <ListGroup.Item>Mow your neighbor's lawn</ListGroup.Item>
            </ListGroup>
            <Button variant="danger" mb-3>Danger</Button>
        </Container>
    )
}

export default ActivitiesResult;