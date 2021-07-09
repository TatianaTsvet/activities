import React, { Component } from "react";
import DetailsFilterGroup from "../details-filter-group";
import { Drawer, Hidden } from "@material-ui/core";
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
        <CancelPresentationIcon
          fontSize={"large"}
          color={"action"}
          classname={classes.closeIcon}
          onClick={this.handleDrawerToggle}
        />
        <DetailsFilterGroup />
      </div>
    );

    return (
      <nav>
        <Hidden xsUP>
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
