import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./error-component.scss";
import styles from "../../../styles";
import { withStyles } from "@material-ui/core/styles";

class ErrorComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container
        justify="center"
        component="main"
        maxWidth="md"
        className={classes.error}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography className={classes.errorMistake} gutterBottom>
              404 error page.
            </Typography>
          </Grid>
          <Grid item>
            <Link
              className={classes.errorLink}
              color="inherit"
              to="/activities"
            >
              Return to the main page
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ErrorComponent);
