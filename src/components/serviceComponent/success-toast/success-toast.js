import React, { Component } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";

import "./success-toast.scss";
import { closeToast } from "../../../saga/actions/index";

class SuccessToast extends Component {
  closeToast = () => {
    this.props.closeToast(false);
  };

  render() {
    const { success } = this.props;
    let toast = "";
    if (success) {
      toast = (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          autoHideDuration={1000}
          onClose={this.closeToast}
          open={success}
        >
          <Alert severity="success">Activity successfully saved</Alert>
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
    success: state.success,
  };
};

export default connect(mapStateToProps, { closeToast })(SuccessToast);
