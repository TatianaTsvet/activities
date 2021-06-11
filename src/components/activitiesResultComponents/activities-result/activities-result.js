import React, { Component } from "react";
import ActivitiesResultItem from "../activities-result-item";
import RepeatedModal from "../repeated-modal";
import SuccessToast from "../../../core/components/success-toast";

import "./activities-result.scss";

export default class ActivitiesResult extends Component {
  render() {
    return (
      <>
        <ActivitiesResultItem />
        <SuccessToast />
        <RepeatedModal />
      </>
    );
  }
}

