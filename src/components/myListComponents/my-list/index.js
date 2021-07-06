import MyList from "./my-list";
import {
  switchSkelet,
  closeToast,
  activitiesInList,
  resetActivities,
} from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activity: state.mainReducers.activity,
    skeletonLoading: state.serviceReducers.skeletonLoading,
    activitiesInMyList: state.mainReducers.activitiesInMyList,
  };
};

export default connect(mapStateToProps, {
  switchSkelet,
  closeToast,
  activitiesInList,
  resetActivities,
})(MyList);
