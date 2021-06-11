/* eslint-disable react/display-name */
import React, { Component } from "react";

function ModalComponent(RepeatedModal) {
  return class extends Component {
    componentWillReceiveProps = (nextProps) => {
      console.log(nextProps.repeatedActivity);
    };
    render() {
      return <RepeatedModal {...this.props} />;
    }
  };
}
export default ModalComponent;
