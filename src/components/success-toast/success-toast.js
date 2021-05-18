import React, { Component } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";

import "./success-toast.scss";

const styles = (theme) => ({
  toast: {
    position: "absolute",
    top: "15em",
  },
});

class SuccessToast extends Component {
  closeToast = () => {
    this.props.closeToast(false);
  };

  render() {
    const { success, classes } = this.props;
    let toast = "";
    if (success) {
      toast = (
        <Snackbar
          className={classes.toast}
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

export default withStyles(styles, { withTheme: true })(SuccessToast);
