import MyList from "./my-list";
import { activitiesInList, switchSpinner } from "../../../saga/actions";
import { connect } from "react-redux";

export default connect(null, {
  activitiesInList,
  switchSpinner,
})(MyList);
