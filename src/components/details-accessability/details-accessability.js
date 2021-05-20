import React, { Component } from "react";
import { Slider, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import "./details-accessability.scss";

const styles = (theme) => ({
  root: {
    color: "#fff",
    marginBottom: "1em",
  },
});

class DetailsAccessability extends Component {
  changeAccessability = (event, newValue) => {
    this.props.updateAccessability(newValue);
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography id="continuous-slider" gutterBottom>
          accessability
        </Typography>
        <Slider
          className={classes.root}
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

DetailsAccessability.propTypes = {
  value: PropTypes.number,
};

const mapStateProps = (state) => {
  return {
    //loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccessability: (accessability) =>
      dispatch({
        type: "updateDetailsAccessability",
        payload: { accessability },
      }),
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(DetailsAccessability));
