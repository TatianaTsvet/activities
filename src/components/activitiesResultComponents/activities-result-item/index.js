import ActivitiesResultItem from "./activities-result-item";
import { connect } from "react-redux";
import {
  addItemToMyList,
  showSuccess,
  saveAgainActivity,
  resetErrorActivity,
} from "../../../saga/actions";

const mapStateToProps = (state) => {
  return {
    randomActivity: state.mainReducers.randomActivity,
    error: state.serviceReducers.error,
    repeatedActivity: state.serviceReducers.repeatedActivity,
    activity: state.mainReducers.activity,
    loading: state.serviceReducers.loading,
  };
};

export default connect(mapStateToProps, {
  addItemToMyList,
  showSuccess,
  saveAgainActivity,
  resetErrorActivity,
})(ActivitiesResultItem);
