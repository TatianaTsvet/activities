import MobileResetButton from "./mobile-reset-button";
import { connect } from "react-redux";
import { asyncResetDetails, switchSpinner } from "../../../../saga/actions";

const mapStateToProps = (state) => {
  return {
    details: state.detailReducers,
  };
};
export default connect(mapStateToProps, {
  asyncResetDetails,
  switchSpinner,
})(MobileResetButton);
