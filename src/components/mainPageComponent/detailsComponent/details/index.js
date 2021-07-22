import Details from "./details";
import { connect } from "react-redux";

import "./details.scss";
import {
  switchSpinner,
  changeError,
  resetDetails,
  openDrawer,
  getNewActivity,
} from "../../../../saga/actions";

const mapStateToProps = (state) => {
  return {
    details: state.detailReducers,
    loading: state.serviceReducers.loading,
    randomActivity: state.mainReducers.randomActivity,
  };
};

export default connect(mapStateToProps, {
  changeError,
  switchSpinner,
  resetDetails,
  openDrawer,
  getNewActivity,
})(Details);
