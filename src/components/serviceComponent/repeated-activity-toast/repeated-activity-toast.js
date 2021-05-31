import React, { Component } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";

import "./repeated-activity-toast.scss";
import { closeRepeatedToast } from "../../../saga/actions/index";

class RepeatedActivityToast extends Component {
  closeRepeatedToast = () => {
    this.props.closeRepeatedToast(false);
  };

  render() {
    const { repeatedActivity, randomActivity } = this.props;
    let toast = "";
    if (repeatedActivity) {
      toast = (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          autoHideDuration={1000}
          onClose={this.closeRepeatedToast}
          open={repeatedActivity}
        >
          <Alert severity="warning">
            "{randomActivity.activity}" successfully saved
          </Alert>
        </Snackbar>
      );
    } else {
      return null;
    }
    return <>{toast}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    repeatedActivity: state.serviceReducers.repeatedActivity,
    randomActivity: state.mainReducers.randomActivity,
  };
};

export default connect(mapStateToProps, { closeRepeatedToast })(
  RepeatedActivityToast
);
