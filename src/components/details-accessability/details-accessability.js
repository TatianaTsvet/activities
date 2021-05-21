import React, { Component } from "react";
import { Slider, Typography, Grid, Input } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import "./details-accessability.scss";
import { updateDetailasAccessability } from "../../actions";

const styles = (theme) => ({
  root: {
    color: "#fff",
    marginBottom: "1em",
  },
});

class DetailsAccessability extends Component {
  changeAccessability = (event, newValue) => {
    this.props.updateDetailasAccessability(newValue);
  };

  handleInputChange = (event) => {
    this.props.updateDetailasAccessability(event.target.value);
  };

  render() {
    const { classes, accessability } = this.props;

    return (
      <>
        <Typography id="continuous-slider" gutterBottom>
          accessability
        </Typography>
        <Grid container justify="space-between" spacing={3} alignItems="center">
          <Grid item xs={9}>
            <Slider
              className={classes.root}
              aria-labelledby="input-slider"
              value={accessability}
              min={0}
              max={1}
              step={0.1}
              onChange={this.changeAccessability}
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              className={classes.root}
              onChange={this.handleInputChange}
              inputProps={{
                value: accessability,

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

DetailsAccessability.propTypes = {
  value: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    accessability: state.details.accessability,
  };
};

export default connect(mapStateToProps, { updateDetailasAccessability })(
  withStyles(styles, { withTheme: true })(DetailsAccessability)
);
