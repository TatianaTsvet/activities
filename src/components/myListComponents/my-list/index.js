import MyList from "./my-list";
import {
  resetActivities,
  switchSkelet,
  closeToast,
  activitiesInList,
  changeActivityOrder,
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
  resetActivities,
  switchSkelet,
  closeToast,
  activitiesInList,
  changeActivityOrder,
})(MyList);
