import React, { Component } from "react";
import ActivitiesResultItem from "../activities-result-item";
import RepeatedModal from "../repeated-modal";
import SuccessToast from "../../../core/components/success-toast";

import "./activities-result.scss";

export default class ActivitiesResult extends Component {
  closeRepeatedToast = () => {
    this.props.closeRepeatedToast(false);
  };
  render() {
    const { repeatedActivity, randomActivity } = this.props;

    return (
      <div className="activities-result">
        <ActivitiesResultItem />
        <SuccessToast />
        <RepeatedModal
          repeatedActivity={repeatedActivity}
          randomActivity={randomActivity.activity}
          closeRepeatedToast={this.closeRepeatedToast}
        />
      </div>
    );
  }
}
