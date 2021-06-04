import {
  ACTIVITIES_IN_MY_LIST,
  ACTIVITY_FETCHED,
  ADD_ITEM_TO_MY_LIST,
  DELETE_ACTIVITY_ITEM,
  RESET_DETAILS,
} from "../actions/actionType";

const storageKey = "activityKey";

const defaultState = {
  activity: JSON.parse(localStorage.getItem(storageKey) ?? "[]"),
  randomActivity: "",
  activitiesInMyList: [],
};

const mainReducers = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIVITY_FETCHED:
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
    case ADD_ITEM_TO_MY_LIST:
      const { randomActivity } = action.payload;
      const newItem = { ...randomActivity };

      const sameActivity = !!state.activity.includes(newItem.key);
      const newActivity = sameActivity
        ? state.activity
        : [...state.activity, newItem.key];

      localStorage.setItem(storageKey, JSON.stringify(newActivity));

      return {
        ...state,
        activity: newActivity,
        activitiesInMyList: [...state.activitiesInMyList, newItem],
      };

    case DELETE_ACTIVITY_ITEM:
      const { key } = action.payload;
      const nonDeletedActivities = state.activity.filter(
        (item) => key !== item
      );

      localStorage.setItem(storageKey, JSON.stringify(nonDeletedActivities));
      const activitiesInMyList = state.activitiesInMyList.filter(
        (item) => item.key !== key
      );

      return {
        ...state,
        activity: nonDeletedActivities,
        activitiesInMyList: activitiesInMyList,
      };

    case ACTIVITIES_IN_MY_LIST:
      return {
        ...state,
        activitiesInMyList: action.payload.activitiesInMyList,
      };

    case RESET_DETAILS:
      return {
        ...state,
        randomActivity: "",
      };

    default:
      return state;
  }
};

export default mainReducers;
