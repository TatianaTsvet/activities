import React, { Component } from "react";
import { TextField, Typography, FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./details-participants.scss";
import { connect } from "react-redux";
import { updateDetailsParticipants } from "../../../saga/actions";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: "1em",
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
    const { classes, participants } = this.props;
    return (
      <FormControl className={classes.root}>
        <Typography gutterBottom>Participants</Typography>
        <TextField
          className={classes.textField}
          id="outlined-basic"
          type="number"
          min={1}
          defaultValue={1}
          value={participants}
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
const mapStateToProps = (state) => {
  return {
    participants: state.detailReducers.details.participants,
  };
};

export default connect(mapStateToProps, { updateDetailsParticipants })(
  withStyles(styles, { withTheme: true })(DetailsParticipants)
);
