import Header from "./header";
import { connect } from "react-redux";
import { activitiesInList } from "../../saga/actions";

const mapStateToProps = (state) => {
  return {
    activity: state.mainReducers.activity,
  };
};

export default connect(mapStateToProps, {
  activitiesInList,
})(Header);
