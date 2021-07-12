import React, { Component } from "react";
import { Typography, Grid, Tabs, Tab, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import "./header.scss";

function TabPanel(props) {
  const { children, value, index } = props;
  return <> {value === index && children}</>;
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <>
        <Grid container direction="row" alignItems="center" spacing={5}>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              <Link className={classes.header} color="inherit" to="/activities">
                Activities
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              <Link className={classes.header} color="inherit" to="/mylist">
                My List
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab label="Activity" />
              <Tab label="My List" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </div>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
