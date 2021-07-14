import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import styles from "./styles";
import "./details-type.scss";

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
    const { classes, type } = this.props;
    let newType = type;
    if (newType === "busywork") {
      newType = "busy work";
    }
    return (
      <Autocomplete
        key={type}
        clearText="close"
        className={classes.autocomplete}
        options={availableTypes}
        getOptionLabel={(option) => option.title.toUpperCase()}
        onChange={this.changeType}
        renderInput={(params) => (
          <TextField
            {...params}
            label={type === "" ? "Choose any type" : newType}
          />
        )}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(DetailsType);
