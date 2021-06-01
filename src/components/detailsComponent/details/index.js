import Details from "./details";
import { connect } from "react-redux";

import "./details.scss";
import {
  activityFetched,
  switchSpinner,
  changeError,
  resetDetails,
} from "../../../saga/actions";

const mapStateToProps = (state) => {
  return {
    details: state.detailReducers.details,
    loading: state.serviceReducers.loading,
  };
};

export default connect(mapStateToProps, {
  activityFetched,
  changeError,
  switchSpinner,
  resetDetails,
})(Details);
