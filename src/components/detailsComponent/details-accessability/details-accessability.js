import React, { Component } from "react";
import { Slider, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import "./details-accessability.scss";
import { updateDetailsAccessability } from "../../../saga/actions";

const styles = (theme) => ({
  root: {
    color: "#fff",
    marginBottom: "1em",
    textTransform: "lowercase",
  },
});

const marks = [
  {
    value: 0,
    label: "easy",
  },

  {
    value: 1,
    label: "difficult",
  },
];

class DetailsAccessability extends Component {
  changeAccessability = (event, newValue) => {
    const [minValue, maxValue] = newValue;
    const minaccessibility = Number.parseFloat(minValue);
    const maxaccessibility = Number.parseFloat(maxValue);

    this.props.updateDetailsAccessability(minaccessibility, maxaccessibility);
  };

  render() {
    const { classes, minaccessability, maxaccessability } = this.props;

    return (
      <>
        <Typography id="range-slider" gutterBottom>
          accessability
        </Typography>
        <Slider
          className={classes.root}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          onChange={this.changeAccessability}
          min={0}
          max={1}
          scale={(x) => `${x * 100}%`}
          step={0.1}
          value={[minaccessability, maxaccessability]}
          marks={marks}
        />
      </>
    );
  }
}

DetailsAccessability.defaultProps = {
  minValue: 0,
  maxValue: 1,
};

const mapStateToProps = (state) => {
  return {
    minaccessability: state.detailReducers.details.minaccessability,
    maxaccessability: state.detailReducers.details.maxaccessability,
  };
};

export default connect(mapStateToProps, { updateDetailsAccessability })(
  withStyles(styles, { withTheme: true })(DetailsAccessability)
);
