import DetailsBudget from "./details-budget";
import { connect } from "react-redux";

import { updateDetailsBudget } from "../../../saga/actions";

const mapStateToProps = (state) => {
  return {
    minprice: state.detailReducers.details.minprice,
    maxprice: state.detailReducers.details.maxprice,
  };
};
export default connect(mapStateToProps, {
  updateDetailsBudget,
})(DetailsBudget);
