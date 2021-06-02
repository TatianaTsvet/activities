import DetailsParticipants from "./details-participants";
import { connect } from "react-redux";
import { updateDetailsParticipants } from "../../../saga/actions/";

const mapStateToProps = (state) => {
  return {
    participants: state.detailReducers.participants,
  };
};

export default connect(mapStateToProps, { updateDetailsParticipants })(
  DetailsParticipants
);
