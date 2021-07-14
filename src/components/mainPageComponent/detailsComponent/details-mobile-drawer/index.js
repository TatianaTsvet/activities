import DetailsMobileDrawer from "./details-mobile-drawer";
import { connect } from "react-redux";

import "./details-mobile-drawer.scss";
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
    mobileDrawer: state.serviceReducers.mobileDrawer,
  };
};

export default connect(mapStateToProps, {
  openDrawer,
  activityFetched,
  changeError,
  switchSpinner,
  resetDetails,
})(DetailsMobileDrawer);
