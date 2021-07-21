import MainPage from "./main-page";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    error: state.serviceReducers.error,
    randomActivity: state.mainReducers.randomActivity,
  };
};
export default connect(mapStateToProps)(MainPage);
