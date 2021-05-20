const storageKey = "somekey";
const initialState = {
  details: {
    type: "",
    participants: 1,
    minprice: 0,
    maxprice: 1,
    accessability: 0,
  },
  activity: JSON.parse(localStorage.getItem(storageKey) ?? "[]"),
  randomActivity: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateDetailasAccessability":
      return {
        ...state,
        details: {
          ...state.details,
          accessability: action.payload.accessability,
        },
      };
    case "updateDetailsBudget":
      return {
        ...state,
        details: {
          ...state.details,
          minprice: action.payload.minprice,
          maxprice: action.payload.maxprice,
        },
      };
    case "updateDetailsParticipants":
      return {
        ...state,
        details: {
          ...state.details,
          participants: action.payload.participants,
        },
      };
    case "updateDetailsType":
      return {
        ...state,
        details: {
          ...state.details,
          type: action.payload.type,
        },
      };
    case "activityFetched":
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
      localStorage.setItem(storageKey, JSON.stringify(newActivity));

      return {
        ...state,
        activity: newActivity,
      };

    case "deleteActivityItem":
      const { key } = action.payload;
      const nonDeletedActivities = state.activity.filter(
        (item) => key !== item.key
      );
      localStorage.setItem(storageKey, JSON.stringify(nonDeletedActivities));

      return {
        ...state,
        activity: nonDeletedActivities,
      };
    default:
      return state;
  }
};

export default reducer;
