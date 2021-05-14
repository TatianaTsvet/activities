import React, { Component } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

import "./details-participants.scss";

export default class DetailsParticipants extends Component {
  changeParticipants = (event) => {
    const participants = Number.parseInt(event.target.value);
    this.props.onChangeParticipants(participants);
  };

  render() {
    const { value } = this.props;
    return (
      <Form.Group>
        <Form.Label>Participants</Form.Label>
        <Form.Control
          type="number"
          min="1"
          value={value}
          onChange={this.changeParticipants}
        />
      </Form.Group>
    );
  }
}

DetailsParticipants.defaultProps = {
  value: 1,
};
DetailsParticipants.propTypes = {
  value: PropTypes.number,
};
