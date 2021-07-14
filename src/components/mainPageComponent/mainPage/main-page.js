import React, { Component } from "react";
import Details from "../detailsComponent/details";
import ActivitiesResult from "../activitiesResultComponents/activities-result";
import { Grid, Box } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import "./main-page.scss";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { display: "none" };
  }
  changeStyle = () => {
    const { error, randomActivity } = this.props;
    const changedDisplay = error || randomActivity ? "block" : "none";
    this.setState({ display: changedDisplay });
  };
  render() {
    const { classes } = this.props;
    const { display } = this.state;

    return (
      <>
        <Grid container justifyContent="center" item>
          <Box
            item
            className={classes.activity}
            component={Grid}
            key={display}
            display={{
              xs: display,
              sm: "block",
            }}
            xs={12}
            sm={6}
          >
            <ActivitiesResult />
          </Box>

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
            <Details changeStyle={this.changeStyle} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainPage);
