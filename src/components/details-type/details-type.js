import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./details-type.scss";
import { updateDetailsType } from "../../actions";

const availableTypes = [
  { title: "education" },
  { title: "recreational" },
  { title: "social" },
  { title: "diy" },
  { title: "charity" },
  { title: "cooking" },
  { title: "relaxation" },
  { title: "music" },
  { title: "busy work" },
];

const styles = (theme) => ({
  root: {
    width: "100%",
    background: "#fff",
    textTransform: "capitalize",
  },
});

class DetailsType extends Component {
  changeType = (event, newValue) => {
    this.props.updateDetailsType(newValue.title);
  };

  render() {
    const { classes } = this.props;

    return (
      <Autocomplete
        renderOption={(option) => (
          <React.Fragment>
            <span style={{ textTransform: "capitalize" }}>{option.title}</span>
          </React.Fragment>
        )}
        className={classes.root}
        onChange={this.changeType}
        id="combo-box-demo"
        options={availableTypes}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="choose any type" variant="outlined" />
        )}
      />
    );
  }
}

export default connect(null, { updateDetailsType })(
  withStyles(styles, { withTheme: true })(DetailsType)
);
