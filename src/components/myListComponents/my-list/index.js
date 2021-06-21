import MyList from "./my-list";
import {
  switchSkelet,
  closeToast,
  postIsVisible,
  activitiesInList,
} from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activity: state.mainReducers.activity,
    skeletonLoading: state.serviceReducers.skeletonLoading,
    isVisible: state.serviceReducers.isVisible,
    activitiesInMyList: state.mainReducers.activitiesInMyList,
  };
};

export default connect(mapStateToProps, {
  switchSkelet,
  closeToast,
  postIsVisible,
  activitiesInList,
})(MyList);
