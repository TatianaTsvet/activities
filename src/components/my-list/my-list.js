import React, { Component } from "react";
import { Button, Card, Chip, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./my-list.scss";

const styles = (theme) => ({
  card: {
    marginBottom: "1em",
    padding: "1em",
  },
  activity: {
    paddingTop: "1em",
  },
  emptyActivity: {
    padding: "1em 0 0 1em",
  },
  emptyActivityButton: {
    padding: "1em",
    margin: "1em",
  },
  chip: {
    background: "#2e7d32",
  },
  doneButton: {
    marginTop: "1em",
  },
  link: {
    textDecoration: "none",
  },
});

class MyList extends Component {
  deleteItem = (key) => {
    this.props.deleteActivityItem(key);
  };

  render() {
    const { activity, classes } = this.props;

    const posts = activity.map((item) => {
      return (
        <div>
          <Card component="nav" className={classes.card} key={item.key}>
            <Chip color="primary" label={item.type} className={classes.chip} />
            <Typography variant="h6" className={classes.activity}>
              {item.activity}
            </Typography>
            <Typography className={classes.activity}>
              {item.participants} participants
            </Typography>
            <Button
              className={classes.doneButton}
              variant="contained"
              color="primary"
              onClick={() => this.deleteItem(item.key)}
            >
              Done
            </Button>
          </Card>
        </div>
      );
    });
    return (
      <>
        {activity.length === 0 ? (
          <Card className={classes.card} key={activity.key}>
            <Typography variant="h6" className={classes.emptyActivity}>
              You have nothing saved yet
            </Typography>

            <Link to="/activities" className={classes.link}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.emptyActivityButton}
              >
                Go back to "Activities"!
              </Button>
            </Link>
          </Card>
        ) : (
          posts
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteActivityItem: (key) =>
      dispatch({
        type: "deleteActivityItem",
        payload: { key },
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(MyList));
