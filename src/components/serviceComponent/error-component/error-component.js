import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./error-component.scss";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    background: "#37474f",
    color: "white",
    margin: "2em auto",
    textTransform: "uppercase",
    height: "30rem",
  },
  link: {
    display: "inline-block",
    color: "#fff",
    margin: "0.5em 2em",
    align: "justify",
  },
  mistake: {
    margin: "5em 0 2em",
    fontSize: "2.4rem",
  },
});

class ErrorComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container
        justify="center"
        component="main"
        maxWidth="md"
        className={classes.root}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography className={classes.mistake} gutterBottom>
              404 error page.
            </Typography>
          </Grid>
          <Grid item>
            <Link className={classes.link} color="inherit" to="/activities">
              Return to the main page
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ErrorComponent);
