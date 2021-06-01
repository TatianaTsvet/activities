import DetailsAccessability from "./details-accessability";
import { connect } from "react-redux";
import { updateDetailsAccessability } from "../../../saga/actions";

const mapStateToProps = (state) => {
  return {
    minaccessability: state.detailReducers.details.minaccessability,
    maxaccessability: state.detailReducers.details.maxaccessability,
  };
};
export default connect(mapStateToProps, { updateDetailsAccessability })(
  DetailsAccessability
);
 