import App from "./app";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    randomActivity: state.mainReducers.randomActivity,
    error: state.serviceReducers.error,
  };
};
export default connect(mapStateToProps)(App);
