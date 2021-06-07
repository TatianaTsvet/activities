import RepeatedModal from "./repeated-modal";
import { connect } from "react-redux";
import { closeRepeatedToast } from "../../../saga/actions/index";

const mapStateToProps = (state) => {
  return {
    repeatedActivity: state.serviceReducers.repeatedActivity,
    randomActivity: state.mainReducers.randomActivity,
  };
};

export default connect(mapStateToProps, { closeRepeatedToast })(RepeatedModal);
