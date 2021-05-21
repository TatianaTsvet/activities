import React, { Component } from "react";
import { TextField, Typography, FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./details-participants.scss";
import { connect } from "react-redux";
import { updateDetailsParticipants } from "../../actions";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  textField: {
    background: "#fff",
    marginBottom: "1em",
  },
});

class DetailsParticipants extends Component {
  updateParticipants = (event) => {
    this.props.updateDetailsParticipants(event.target.value);
  };

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.root}>
        <Typography id="continuous-slider" gutterBottom>
          Participants
        </Typography>
        <TextField
          className={classes.textField}
          id="outlined-basic"
          type="number"
          min={1}
          defaultValue={1}
          variant="outlined"
          onChange={this.updateParticipants}
        />
      </FormControl>
    );
  }
}

DetailsParticipants.defaultProps = {
  value: 1,
};

export default connect(null, { updateDetailsParticipants })(
  withStyles(styles, { withTheme: true })(DetailsParticipants)
);
