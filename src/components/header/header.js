import React, { Component } from "react";
import { Typography, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./header.scss";

const styles = (theme) => ({
  root: {
    display: "inline-block",
    color: "#fff",
    margin: "0.5em 2em",
    align: "justify",
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Typography variant="h6" gutterBottom>
        <Link className={classes.root} color="inherit" href="/activities">
          Activities
        </Link>
        <Link className={classes.root} color="inherit" href="/mylist">
          My List
        </Link>
      </Typography>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Header);
