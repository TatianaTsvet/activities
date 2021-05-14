import React, { Component } from "react";
import DetailsType from "../details-type";
import DetailsParticipants from "../details-participants";
import DetailsBudget from "../details-budget";
import DetailsAccessability from "../details-accessability";
import ActivityService from "../../services/activityService";
import Spinner from "../spinner";
import { Button } from "@material-ui/core";

import "./details.scss";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Choose any type",
      participants: 1,
      minprice: 0,
      maxprice: 1,
      accessability: 0,
    };
  }

  ActivityService = new ActivityService();

  onUpdateBudget = (minprice, maxprice) => {
    this.setState({ minprice, maxprice });
  };
  onChangeParticipants = (participants) => {
    this.setState({ participants });
  };
  onChangeType = (type) => {
    this.setState({ type });
  };
  onUpdateAccessability = (accessability) => {
    this.setState({ accessability });
  };

  sendForm = async (event) => {
    event.preventDefault();
    this.props.switchSpinner(true);
    let activity = { ...this.state };
    activity = await this.ActivityService.getActivity(activity);
    this.props.onActivityFetched(activity);

    if (!activity.error) {
      this.props.changeError(false);
    }
  };
  render() {
    const { type, participants } = this.state;
    const { loading } = this.props;
    return (
      <form onSubmit={this.sendForm}>
        <h5 className="text-white">Activity details</h5>
        <DetailsType onChangeType={this.onChangeType} type={type} />
        <DetailsParticipants
          onChangeParticipants={this.onChangeParticipants}
          value={participants}
        />
        <DetailsBudget onUpdateBudget={this.onUpdateBudget} />
        <DetailsAccessability
          onUpdateAccessability={this.onUpdateAccessability}
        />
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Button type="submit" variant="contained" color="primary">
              Hit me with the new one
            </Button>
          </>
        )}
      </form>
    );
  }
}
