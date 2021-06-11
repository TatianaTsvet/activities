import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Card, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../../styles";
import "./my-list-no-posts.scss";

class MyListNoPosts extends Component {
  render() {
    const { activity, classes } = this.props;

    if (activity.length !== 0) {
      return null;
    }

    return (
      <Card key="noActivity">
        <Typography variant="h6" className={classes.myListEmptyActivity}>
          You have nothing saved yet
        </Typography>

        <Link to="/activities" className={classes.myListLink}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.myListEmptyActivityButton}
          >
            Go back to "Activities"!
          </Button>
        </Link>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyListNoPosts);
