import React, { Component } from "react";
import { FormControl, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./details-type.scss";

const availableTypes = [
  "Choose any type",
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busy work",
];

const styles = (theme) => ({
  root: {
    width: "100%",
    marginBottom: "1em",
  },
  select: {
    background: "#fff",
  },
});

class DetailsType extends Component {
  changeSelect = (event) => {
    this.props.onChangeType(event.target.value);
  };

  render() {
    const { classes } = this.props;
    const types = availableTypes.map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
    return (
      <FormControl className={classes.root} variant="outlined">
        <Select className={classes.select} native onChange={this.changeSelect}>
          {types}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DetailsType);
