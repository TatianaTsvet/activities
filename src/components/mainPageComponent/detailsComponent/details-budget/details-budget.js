import React, { Component } from "react";
import PropTypes from "prop-types";
import { Slider, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import "./details-budget.scss";

const marks = [
  {
    value: 0,
    label: "cheap",
  },

  {
    value: 1,
    label: "expensive",
  },
];

class DetailsBudget extends Component {
  onChange = (event, newValue) => {
    const [minValue, maxValue] = newValue;
    const minprice = Number.parseFloat(minValue);
    const maxprice = Number.parseFloat(maxValue);
    this.props.updateDetailsBudget(minprice, maxprice);
  };

  render() {
    const { classes, minprice, maxprice } = this.props;
    return (
      <div className="detail_budget">
        <Typography id="range-slider" gutterBottom>
          max budget
        </Typography>
        <Slider
          className={classes.slider}
          valueLabelDisplay="auto"
          scale={(x) => `${x * 100}%`}
          aria-labelledby="track-inverted-range-slider"
          onChange={this.onChange}
          min={0}
          max={1}
          step={0.1}
          value={[minprice, maxprice]}
          marks={marks}
        />
      </div>
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

export default withStyles(styles, { withTheme: true })(DetailsBudget);
