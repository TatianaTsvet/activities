import React, { Component } from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import PropTypes from "prop-types";

import "./details-type.scss";

const availableTypes = [
  "Choose any type",
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busy work",
];
export default class DetailsType extends Component {
  changeSelect = (event) => {
    this.props.onChangeType(event.target.value);
  };

  render() {
    const { type } = this.props;
    const types = availableTypes.map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
    return (
      <>
        <InputLabel htmlFor="outlined-age-native-simple">
          Select any type
        </InputLabel>
        <Select
          native
          onChange={this.changeSelect}
          label="Age"
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        {/* </FormControl>
        <Form.Group>
          <Form.Label>Custom select</Form.Label>
          <Form.Control
            as="select"
            custom
            value={type}
            onChange={this.changeSelect}
          >
            {types}
          </Form.Control>
        </Form.Group> */}
      </>
    );
  }
}

DetailsType.defaultProps = {
  type: "Choose any type",
};
DetailsType.propTypes = {
  type: PropTypes.string,
};
