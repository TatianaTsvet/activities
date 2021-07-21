import React, { Component } from "react";
import DetailsFilterGroup from "../details-filter-group";
import { Drawer, Hidden, Button } from "@material-ui/core";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class DetailsMobileDrawer extends Component {
  handleDrawerToggle = () => {
    this.props.openDrawer(false);
  };
  render() {
    const { classes, mobileDrawer } = this.props;

    const drawer = (
      <div className={classes.drawer}>
        <Button
          variant="contained"
          onClick={this.handleDrawerToggle}
          className={classes.filterButton}
          startIcon={<CancelPresentationIcon />}
        >
          Exit
        </Button>
        <DetailsFilterGroup />
      </div>
    );

    return (
      <nav>
        <Hidden smUp>
          <Drawer
            variant="temporary"
            anchor={"left"}
            open={mobileDrawer}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DetailsMobileDrawer);
