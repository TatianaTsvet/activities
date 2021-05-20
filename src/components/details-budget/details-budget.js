import React, { Component } from "react";

import PropTypes from "prop-types";
import { Slider, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./details-budget.scss";
import { connect } from "react-redux";

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
    this.props.updateBudget(minprice, maxprice);
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography id="range-slider" gutterBottom>
          max budget
        </Typography>
        <Slider
          className={classes.root}
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

const mapStateProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBudget: (minprice, maxprice) =>
      dispatch({
        type: "updateDetailsBudget",
        payload: { minprice, maxprice },
      }),
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(DetailsBudget));
