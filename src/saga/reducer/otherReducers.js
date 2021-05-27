const storageKey = "somekey";
const initialState = {
  activity: JSON.parse(localStorage.getItem(storageKey) ?? "[]"),
  randomActivity: null,
  error: false,
  success: false,
  loading: false,
};

const otherReducers = (state = initialState, action) => {
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
    case "addItemToMyList":
      const { randomActivity } = action.payload;
      const newItem = {
        type: randomActivity.type,
        participants: randomActivity.participants,
        activity: randomActivity.activity,
        key: randomActivity.key,
      };
      const sameActivity =
        !!state.randomActivity &&
        !!state.activity.find((item) => item.key === newItem.key);
      const newActivity = sameActivity
        ? state.activity
        : [...state.activity, newItem];
      newActivity.filter((item) => item !== null);
      localStorage.setItem(
        storageKey,
        JSON.stringify(newActivity.map((item) => item.key))
      );

      return {
        ...state,
        activity: newActivity,
      };

    case "deleteActivityItem":
      const { key } = action.payload;
      const nonDeletedActivities = state.activity.filter(
        (item) => key !== item.key
      );
      localStorage.setItem(
        storageKey,
        JSON.stringify(nonDeletedActivities.map((item) => item.key))
      );

      return {
        ...state,
        activity: nonDeletedActivities,
        activitiesInMyList: nonDeletedActivities,
        success: false,
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
        activity: action.payload.activitiesInMyList,
        loading: false,
      };
    default:
      return state;
  }
};

export default otherReducers;
