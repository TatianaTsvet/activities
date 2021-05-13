import React, { Component } from 'react';
import {
  Button, Container, ListGroup, Row,
} from 'react-bootstrap';

import './activities-result.css';

export default class ActivitiesResult extends Component {
    sendToMyList = () => {
      const { randomActivity } = this.props;
      this.props.addItem(randomActivity);
      this.props.setShow(true);
    }

    render() {
      const { randomActivity, error } = this.props;
      const showButton = !error && randomActivity;
      const activityComponent = randomActivity
        ? <ListGroup.Item className="result_window">{randomActivity.activity}</ListGroup.Item>
        : <ListGroup.Item className="result_window invitation">Choose any activity</ListGroup.Item>;

      return (
        <>
          <Container className="flex flex-column d-flex pt-3 pb-3 ">
            <ListGroup className=" float">
              <h5 className="text-white">You should</h5>
              {error ? <ListGroup.Item className="result_window error">{error}</ListGroup.Item> : activityComponent}

            </ListGroup>
            <Row className="mx-auto mt-5 ">
              {showButton && (
              <Button
                variant="danger"
                type="submit"
                onClick={this.sendToMyList}
              >
                Save for you later
              </Button>
              )}
            </Row>
          </Container>

        </>
      );
    }
}
