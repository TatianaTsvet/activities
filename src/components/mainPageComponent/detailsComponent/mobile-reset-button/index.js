import MobileResetButton from "./mobile-reset-button";
import { connect } from "react-redux";
import {
  resetErrorActivity,
  resetDetails,
  activityFetched,
} from "../../../../saga/actions";

export default connect(null, {
  resetErrorActivity,
  resetDetails,
  activityFetched,
})(MobileResetButton);
