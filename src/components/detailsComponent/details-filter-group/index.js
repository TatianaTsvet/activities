import DetailsFilterGroup from "./details-filter-group";

import { connect } from "react-redux";
import "./details-filter-group.scss";
import { resetDetails } from "../../../saga/actions";

const mapStateToProps = (state) => {
  return {
    details: state.detailReducers,
    loading: state.serviceReducers.loading,
  };
};

export default connect(mapStateToProps, {
  resetDetails,
})(DetailsFilterGroup);
