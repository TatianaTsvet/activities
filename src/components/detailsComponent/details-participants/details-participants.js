import React, { Component } from "react";
import { TextField, Typography, FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../styles";
import "./details-participants.scss";

class DetailsParticipants extends Component {
  updateParticipants = (event) => {
    this.props.updateDetailsParticipants(event.target.value);
  };

  render() {
    const { classes, participants } = this.props;
    return (
      <FormControl className={classes.participansForm}>
        <Typography gutterBottom>Participants</Typography>
        <TextField
          className={classes.participantsTextField}
          id="outlined-basic"
          type="number"
          min={1}
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

export default withStyles(styles, { withTheme: true })(DetailsParticipants);
