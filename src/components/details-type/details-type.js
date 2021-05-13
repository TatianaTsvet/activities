import React, { Component } from "react";
import { Form } from "react-bootstrap";

import "./details-type.css";

export default class DetailsType extends Component {
  changeSelect = (event) => {
    this.props.onChangeType(event.target.value);
  };

  render() {
    const { availableTypes, value } = this.props;
    const types = availableTypes.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
    return (
      <Form.Group>
        <Form.Label>Custom select</Form.Label>
        <Form.Control
          as="select"
          custom
          value={value}
          onChange={this.changeSelect}
        >
          {types}
        </Form.Control>
      </Form.Group>
    );
  }
}
