import React, { Component } from "react";

import PropTypes from "prop-types";
import { Slider, Typography } from "@material-ui/core";

import "./details-budget.scss";

export default class DetailsBudget extends Component {
  onChange = (event: any, newValue) => {
    const [minValue, maxValue] = newValue;
    const minprice = Number.parseFloat(minValue);
    const maxprice = Number.parseFloat(maxValue);
    this.props.onUpdateBudget(minprice, maxprice);
  };

  render() {
    return (
      <>
        <Typography id="range-slider" gutterBottom>
          max budget
        </Typography>
        <Slider
          aria-labelledby="range-slider"
          onChange={this.onChange}
          min={0}
          max={1}
          step={0.1}
          defaultValue={[0, 1]}
        />
      </>
    );
  }
}
DetailsBudget.defaultProps = {
  minValue: 0,
  maxValue: 1,
};
DetailsBudget.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};
