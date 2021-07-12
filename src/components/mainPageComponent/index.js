import MainPage from "./main-page";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    // randomActivity: state.mainReducers.randomActivity,
    // error: state.serviceReducers.error,
    // activity: state.mainReducers.activity,
  };
};
export default connect(mapStateToProps)(MainPage);
