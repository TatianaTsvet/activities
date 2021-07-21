import React, { Component } from "react";
import Details from "../detailsComponent/details";
import ActivitiesResult from "../activitiesResultComponents/activities-result";
import { Grid, Box } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import "./main-page.scss";

class MainPage extends Component {
  render() {
    const { classes, error, randomActivity } = this.props;
    const styledDisplay =
      !error && randomActivity.length === 0 ? "none" : "block";
    return (
      <>
        <Grid container justify="flex-end" item>
          {styledDisplay === "block" && (
            <Box
              item
              className={classes.activity}
              component={Grid}
              display={{
                xs: styledDisplay,
                sm: "block",
              }}
              xs={12}
              sm={6}
            >
              <ActivitiesResult />
            </Box>
          )}

          <Grid
            item
            container
            justifyContent="space-between"
            direction="column"
            alignItems="stretch"
            className={classes.details}
            xs={12}
            sm={6}
          >
            <Details />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainPage);
