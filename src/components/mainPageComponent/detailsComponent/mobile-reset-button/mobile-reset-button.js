import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import "./mobile-reset-button.scss";

class MobileResetButton extends Component {
  resetAllAndFetchNew = async () => {
    await this.props.resetDetails();
    this.props.resetErrorActivity();
    this.props.sendForm();
  };
  render() {
    const { classes } = this.props;

    return (
      <Grid item container direction="column">
        <Button
          className={classes.mobileResetButton}
          variant="contained"
          onClick={this.resetAllAndFetchNew}
        >
          Reset all and <br /> hit a new activity
        </Button>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MobileResetButton);
