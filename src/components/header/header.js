import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles";
import "./header.scss";

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Typography variant="h6" gutterBottom>
        <Link className={classes.header} color="inherit" to="/activities">
          Activities
        </Link>
        <Link className={classes.header} color="inherit" to="/mylist">
          My List
        </Link>
      </Typography>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
