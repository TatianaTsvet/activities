import {
  ACTIVITIES_IN_MY_LIST,
  ACTIVITY_FETCHED,
  CHANGE_ERROR,
  CLOSE_REPEATED_TOAST,
  CLOSE_TOAST,
  RESET_DETAILS,
  SAVE_AGAIN_ACTIVITY,
  SHOW_SUCCESS,
  SWITCH_SPINNER,
  SWITCH_SKELET,
  POST_IS_VISIBLE,
} from "../actions/actionType";

const defaultState = {
  error: false,
  success: false,
  loading: false,
  repeatedActivity: false,
  skeletonLoading: true,
  isVisible: true,
};

const serviceReducers = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIVITY_FETCHED:
      if (action.payload.randomActivity.error) {
        return {
          ...state,
          error: action.payload.randomActivity.error,
          loading: false,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }

    case SHOW_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
      };
    case CLOSE_TOAST:
      return {
        ...state,
        success: action.payload.success,
      };
    case CHANGE_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case SWITCH_SPINNER:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case SWITCH_SKELET:
      return {
        ...state,
        skeletonLoading: action.payload.loading,
      };
    case ACTIVITIES_IN_MY_LIST:
      return {
        ...state,
        skeletonLoading: false,
      };
    case CLOSE_REPEATED_TOAST:
      return {
        ...state,
        repeatedActivity: action.payload.repeatedActivity,
      };
    case SAVE_AGAIN_ACTIVITY:
      return {
        ...state,
        repeatedActivity: action.payload.repeatedActivity,
      };
    case RESET_DETAILS:
      return {
        ...state,
        error: false,
      };
    case POST_IS_VISIBLE:
      return {
        ...state,
        isVisible: action.payload.isVisible,
      };

    default:
      return state;
  }
};

export default serviceReducers;
