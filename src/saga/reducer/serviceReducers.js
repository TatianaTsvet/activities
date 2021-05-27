const initialState = {
  error: false,
  success: false,
  loading: false,
};

const serviceReducers = (state = initialState, action) => {
  switch (action.type) {
    case "activityFetched":
      if (action.payload.randomActivity.error) {
        return {
          ...state,
          error: action.payload.randomActivity.error,
          loading: false,
        };
      }
      return {
        ...state,
        randomActivity: action.payload.randomActivity,
        loading: false,
      };

    case "showSuccess":
      return {
        ...state,
        success: action.payload.success,
      };
    case "closeToast":
      return {
        ...state,
        success: action.payload.success,
      };
    case "changeError":
      return {
        ...state,
        error: action.payload.error,
      };
    case "switchSpinner":
      return {
        ...state,
        loading: action.payload.loading,
      };
    case "activitiesInMyList":
      return {
        ...state,

        loading: false,
      };
    default:
      return state;
  }
};

export default serviceReducers;
