import MyList from "./my-list";
import {
  deleteActivityItem,
  activitiesInList,
  switchSpinner,
} from "../../saga/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loading: state.serviceReducers.loading,
    activity: state.mainReducers.activity,
  };
};

export default connect(mapStateToProps, {
  deleteActivityItem,
  activitiesInList,
  switchSpinner,
})(MyList);
