import DetailsAccessability from "./details-accessability";
import { connect } from "react-redux";
import { updateDetailsAccessability } from "../../../../saga/actions";

const mapStateToProps = (state) => {
  return {
    minaccessability: state.detailReducers.minaccessability,
    maxaccessability: state.detailReducers.maxaccessability,
  };
};
export default connect(mapStateToProps, { updateDetailsAccessability })(
  DetailsAccessability
);
