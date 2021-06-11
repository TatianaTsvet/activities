import MyList from "./my-list";
import {
  activitiesInList,
  switchSkelet,
  closeToast,
} from "../../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activity: state.mainReducers.activity,
  };
};

export default connect(mapStateToProps, {
  activitiesInList,
  switchSkelet,
  closeToast,
})(MyList);
