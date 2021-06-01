import {
  ACTIVITIES_IN_MY_LIST,
  ACTIVITY_FETCHED,
  ADD_ITEM_TO_MY_LIST,
  DELETE_ACTIVITY_ITEM,
} from "../actions/actionType";

const storageKey = "activityKey";
const initialState = {
  activity: JSON.parse(localStorage.getItem(storageKey) ?? "[]"),
  randomActivity: null,
};

const mainReducers = (state = initialState, action) => {
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

      localStorage.setItem(
        storageKey,
        JSON.stringify(newActivity.map((item) => item.key))
      );

      return {
        ...state,
        activity: newActivity,
      };

    case DELETE_ACTIVITY_ITEM:
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

    case ACTIVITIES_IN_MY_LIST:
      return {
        ...state,
        activity: action.payload.activitiesInMyList,
      };
    default:
      return state;
  }
};

export default mainReducers;
