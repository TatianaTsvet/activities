import React, { Component } from "react";
import { Slider, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import "./details-accessability.scss";

export default class DetailsAccessability extends Component {
  changeAccessability = (event: any, newValue) => {
    this.props.onUpdateAccessability(newValue);
  };

  render() {
    return (
      <>
        <Typography id="continuous-slider" gutterBottom>
          accessability
        </Typography>
        <Slider
          aria-labelledby="continuous-slider"
          min={0}
          max={1}
          step={0.1}
          onChange={this.changeAccessability}
        />
      </>
    );
  }
}

DetailsAccessability.defaultProps = {
  value: 0,
};
DetailsAccessability.propTypes = {
  value: PropTypes.number,
};
