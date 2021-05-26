import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./details-type.scss";
import { updateDetailsType } from "../../actions";

const availableTypes = [
  { title: "Education" },
  { title: "Recreational" },
  { title: "Social" },
  { title: "DIY" },
  { title: "Charity" },
  { title: "Cooking" },
  { title: "Relaxation" },
  { title: "Music" },
  { title: "Busy work" },
];

const styles = (theme) => ({
  root: {
    width: "100%",
    background: "#fff",
  },
  wrapper: {
    color: "red",
    background: "red,",
  },
});

class DetailsType extends Component {
  changeType = (event, newValue, reason) => {
    if (reason === "clear") {
      newValue = { title: "" };
      this.props.updateDetailsType(newValue);
    }
    const detailType = newValue.title.replace(" ", "").toLowerCase();
    this.props.updateDetailsType(detailType);
  };

  render() {
    const { classes } = this.props;

    return (
      <Autocomplete
        className={classes.root}
        id="combo-box-demo"
        options={availableTypes}
        getOptionLabel={(option) => option.title}
        onChange={this.changeType}
        renderInput={(params) => (
          <TextField
            className={classes.wrapper}
            {...params}
            label="choose any type"
          />
        )}
      />
    );
  }
}

export default connect(null, { updateDetailsType })(
  withStyles(styles, { withTheme: true })(DetailsType)
);
