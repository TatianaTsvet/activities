import {
  ACTIVITIES_IN_MY_LIST,
  ACTIVITY_FETCHED,
  ADD_ITEM_TO_MY_LIST,
  DELETE_ACTIVITY_ITEM,
  RESET_ACTIVITIES,
  RESET_DETAILS,
  CHANGE_ACTIVITY_PROGRESS,
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
        };
      }
      return {
        ...state,
        randomActivity: action.payload.randomActivity,
      };
    case ADD_ITEM_TO_MY_LIST:
      const { randomActivity } = action.payload;
      const newItem = randomActivity.key;

      const sameActivity = !!state.activity.find(
        (item) => item.key === newItem
      );

      const activityKey = { key: newItem, progress: 0 };
      const newActivity = sameActivity
        ? state.activity
        : [...state.activity, activityKey];

      localStorage.setItem(storageKey, JSON.stringify(newActivity));

      return {
        ...state,
        activity: newActivity,
      };

    case DELETE_ACTIVITY_ITEM:
      const { key } = action.payload;
      const nonDeletedActivities = state.activity.filter(
        (item) => key !== item.key
      );

      localStorage.setItem(storageKey, JSON.stringify(nonDeletedActivities));
      const activitiesInMyListKeys = state.activitiesInMyList.filter(
        (item) => item.key !== key
      );

      return {
        ...state,
        activity: nonDeletedActivities,
        activitiesInMyList: activitiesInMyListKeys,
      };
    case CHANGE_ACTIVITY_PROGRESS:
      const { changedActivity } = action.payload;
      const activitiesList = JSON.parse(localStorage.getItem(storageKey));

      activitiesList.map((item) => {
        if (item.key === changedActivity.key) {
          return item.progress === changedActivity.progress;
        } else {
          return null;
        }
      });
      console.log(activitiesList);
      return {
        ...state,
        activity: activitiesList,
      };
    case ACTIVITIES_IN_MY_LIST:
      const { activitiesInMyList } = action.payload;

      const sameActivityInMyList = !!state.activitiesInMyList.find(
        (item) => item.key === activitiesInMyList.key
      );
      const newActivityInMyList = sameActivityInMyList
        ? state.activitiesInMyList
        : [...state.activitiesInMyList, activitiesInMyList];
      return {
        ...state,
        activitiesInMyList: newActivityInMyList,
      };

    case RESET_DETAILS:
      return {
        ...state,
        randomActivity: "",
      };
    case RESET_ACTIVITIES:
      const resetActivity = [];
      localStorage.setItem(storageKey, JSON.stringify(resetActivity));
      return {
        ...state,
        activity: [],
        activitiesInMyList: [],
      };

    default:
      return state;
  }
};

export default mainReducers;
