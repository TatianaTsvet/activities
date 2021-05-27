import React, { Component } from "react";

import PropTypes from "prop-types";
import { Slider, Typography, Grid, Input } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./details-budget.scss";
import { connect } from "react-redux";
import {
  updateDetailsBudget,
  changeMinPrice,
  changeMaxPrice,
} from "../../../saga/actions";

const styles = (theme) => ({
  root: {
    color: "#fff",
    marginBottom: "1em",
  },
});

class DetailsBudget extends Component {
  onChange = (event, newValue) => {
    const [minValue, maxValue] = newValue;
    const minprice = Number.parseFloat(minValue);
    const maxprice = Number.parseFloat(maxValue);
    this.props.updateDetailsBudget(minprice, maxprice);
  };

  handleInputLeftChange = (event) => {
    this.props.changeMinPrice(event.target.value);
  };

  handleInputRightChange = (event) => {
    this.props.changeMaxPrice(event.target.value);
  };

  render() {
    const { classes, minprice, maxprice } = this.props;
    return (
      <>
        <Typography id="range-slider" gutterBottom>
          max budget
        </Typography>
        <Grid container justify="space-between" spacing={3} alignItems="center">
          <Grid item xs={2}>
            <Input
              className={classes.root}
              onChange={this.handleInputLeftChange}
              inputProps={{
                value: minprice,
                step: 0.1,
                min: 0,
                max: 1,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Slider
              className={classes.root}
              value={[minprice, maxprice]}
              aria-labelledby="range-slider"
              onChange={this.onChange}
              min={0}
              max={1}
              step={0.1}
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              className={classes.root}
              onChange={this.handleInputRightChange}
              inputProps={{
                value: maxprice,
                step: 0.1,
                min: 0,
                max: 1,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Grid>
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

const mapStateToProps = (state) => {
  return {
    minprice: state.reducerDetails.details.minprice,
    maxprice: state.reducerDetails.details.maxprice,
  };
};

export default connect(mapStateToProps, {
  updateDetailsBudget,
  changeMinPrice,
  changeMaxPrice,
})(withStyles(styles, { withTheme: true })(DetailsBudget));
