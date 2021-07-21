import Details from "./details";
import { connect } from "react-redux";

import "./details.scss";
import {
  activityFetched,
  switchSpinner,
  changeError,
  resetDetails,
  openDrawer,
} from "../../../../saga/actions";

const mapStateToProps = (state) => {
  return {
    details: state.detailReducers,
    loading: state.serviceReducers.loading,
    error: state.serviceReducers.error,
  };
};

export default connect(mapStateToProps, {
  activityFetched,
  changeError,
  switchSpinner,
  resetDetails,
  openDrawer,
})(Details);
