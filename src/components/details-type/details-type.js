import React, { Component } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./details-type.scss";

const availableTypes = [
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
  },
  select: {
    background: "#fff",
  },
  menuItem: {
    textTransform: "capitalize",
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
        <MenuItem
          className={classes.menuItem}
          value={item.replace(" ", "")}
          key={item}
        >
          {item}
        </MenuItem>
      );
    });
    return (
      <FormControl className={classes.root} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">
          Choose any type
        </InputLabel>
        <Select
          className={classes.select}
          onChange={this.changeSelect}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          defaultValue=""
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {types}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DetailsType);
