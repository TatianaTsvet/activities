import ActivitiesResult from "./activities-result";
import { connect } from "react-redux";
import {
  addItemToMyList,
  showSuccess,
  saveAgainActivity,
} from "../../saga/actions";

const mapStateToProps = (state) => {
  return {
    randomActivity: state.mainReducers.randomActivity,
    error: state.serviceReducers.error,
    repeatedActivity: state.serviceReducers.repeatedActivity,
    activity: state.mainReducers.activity,
  };
};

export default connect(mapStateToProps, {
  addItemToMyList,
  showSuccess,
  saveAgainActivity,
})(ActivitiesResult);
