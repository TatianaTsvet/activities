const storageKey = "somekey";
const initialState = {
  activity: JSON.parse(localStorage.getItem(storageKey) ?? "[]"),
  randomActivity: null,
};

const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case "activityFetched":
      if (action.payload.randomActivity.error) {
        return {
          ...state,
          error: action.payload.randomActivity.error,
        };
      }
      return {
        ...state,
        randomActivity: action.payload.randomActivity,
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
      // newActivity.filter((item) => item !== null);
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
      };

    case "activitiesInMyList":
      return {
        ...state,
        activity: action.payload.activitiesInMyList,
      };
    default:
      return state;
  }
};

export default mainReducers;
