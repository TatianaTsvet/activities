import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";


import "./header.scss";

const styles = (theme) => ({
  root: {
    display: "inline-block",
    color: "#fff",
    margin: "0.5em 2em",
    align: "justify",
    textDecoration: "none",
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Typography variant="h6" gutterBottom>
        <Link className={classes.root} color="inherit" to="/activities">
          Activities
        </Link>
        <Link className={classes.root} color="inherit" to="/mylist">
          My List
        </Link>
      </Typography>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
