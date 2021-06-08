import MyListNoPosts from "./my-list-no-post";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    activity: state.mainReducers.activity,
  };
};

export default connect(mapStateToProps)(MyListNoPosts);
