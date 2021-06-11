import App from "./app";

import { connect } from "react-redux";

import { switchSkelet } from "../../saga/actions";

export default connect(null, {
  switchSkelet,
})(App);
