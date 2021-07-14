import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./reset-button.scss";

class ResetButton extends Component {
  render() {
    const { name, resetDetails, className } = this.props;

    return (
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        className={className}
        onClick={() => resetDetails()}
      >
        Reset {name}
      </Button>
    );
  }
}

export default ResetButton;
