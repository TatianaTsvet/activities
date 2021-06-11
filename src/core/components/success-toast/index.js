import SuccessToast from "./success-toast";
import { connect } from "react-redux";

import "./success-toast.scss";
import { closeToast } from "../../../saga/actions/index";

const mapStateToProps = (state) => {
  return {
    success: state.serviceReducers.success,
  };
};

export default connect(mapStateToProps, { closeToast })(SuccessToast);
