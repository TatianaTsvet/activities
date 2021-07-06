import {
  ACTIVITIES_IN_MY_LIST,
  ACTIVITY_FETCHED,
  ADD_ITEM_TO_MY_LIST,
  CHANGE_ACTIVITY_ORDER,
  DELETE_ACTIVITY_ITEM,
  RESET_ACTIVITIES,
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
      const newOrder = Math.max.apply(
        null,
        state.activity.map((item) => item.order)
      );
      console.log(newOrder);
      const activityKey = { key: newItem, order: newOrder + 1  };
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
    case CHANGE_ACTIVITY_ORDER:
      const { activityOrder } = action.payload;
      activityOrder.sort((a, b) => (a.order > b.order ? 1 : -1));
      localStorage.setItem(storageKey, JSON.stringify(activityOrder));
      return {
        ...state,
        activity: activityOrder,
      };

    default:
      return state;
  }
};

export default mainReducers;
