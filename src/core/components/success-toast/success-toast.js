import React, { Component } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import "./success-toast.scss";

class SuccessToast extends Component {
  closeToast = () => {
    this.props.closeToast(false);
  };

  render() {
    const { success } = this.props;
    if (!success) {
      return null;
    }

    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={1000}
        onClose={this.closeToast}
        open={success}
      >
        <Alert severity="success">Activity successfully saved</Alert>
      </Snackbar>
    );
  }
}

export default SuccessToast;
