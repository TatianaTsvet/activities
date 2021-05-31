import DetailsBudget from "./details-budget";
import { connect } from "react-redux";

import { updateDetailsBudget } from "../../../saga/actions/index";

const mapStateToProps = (state) => {
  return {
    minprice: state.detailReducers.details.minprice,
    maxprice: state.detailReducers.details.maxprice,
  };
};
connect(mapStateToProps, {
  updateDetailsBudget,
})(DetailsBudget);

export default DetailsBudget;
