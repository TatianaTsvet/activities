import * as types from "./actionType";

export const updateDetailsBudget = (minprice, maxprice) => {
  return {
    type: types.UPDATE_DETAILS_BUDGET,
    payload: { minprice, maxprice },
  };
};

export const updateDetailsParticipants = (participants) => {
  return {
    type: types.UPDATE_DETAILS_PARTICIPANTS,
    payload: { participants },
  };
};
export const updateDetailsAccessability = (
  minaccessability,
  maxaccessability
) => {
  return {
    type: types.UPDATE_DETAIL_ACCESSABILITY,
    payload: { minaccessability, maxaccessability },
  };
};

export const updateDetailsType = (type) => {
  return {
    type: types.UPDATE_DETAIL_TYPE,
    payload: { type },
  };
};

export const activityFetched = (randomActivity) => {
  return {
    type: types.ACTIVITY_FETCHED,
    payload: { randomActivity },
  };
};
export const addItemToMyList = (randomActivity) => {
  return {
    type: types.ADD_ITEM_TO_MY_LIST,
    payload: { randomActivity },
  };
};
export const deleteActivityItem = (key) => {
  return {
    type: types.DELETE_ACTIVITY_ITEM,
    payload: { key },
  };
};
export const showSuccess = (success) => {
  return {
    type: types.SHOW_SUCCESS,
    payload: { success },
  };
};
export const closeToast = (success) => {
  return {
    type: types.CLOSE_TOAST,
    payload: { success },
  };
};

export const changeError = (error) => {
  return {
    type: types.CHANGE_ERROR,
    payload: { error },
  };
};
export const switchSpinner = (loading) => {
  return {
    type: types.SWITCH_SPINNER,
    payload: { loading },
  };
};
export const switchSkelet = (loading) => {
  return {
    type: types.SWITCH_SKELET,
    payload: { loading },
  };
};

export const activitiesInList = (key) => {
  return {
    type: types.ACTIVITIES_IN_LIST,
    payload: { key },
  };
};

export const activitiesInMyList = (activitiesInMyList) => {
  return {
    type: types.ACTIVITIES_IN_MY_LIST,
    payload: { activitiesInMyList },
  };
};

export const resetDetails = (details) => {
  return {
    type: types.RESET_DETAILS,
    payload: { details },
  };
};
export const closeRepeatedToast = (repeatedActivity) => {
  return {
    type: types.CLOSE_REPEATED_TOAST,
    payload: { repeatedActivity },
  };
};
export const saveAgainActivity = (repeatedActivity) => {
  return {
    type: types.SAVE_AGAIN_ACTIVITY,
    payload: { repeatedActivity },
  };
};
export const resetActivities = () => {
  return {
    type: types.RESET_ACTIVITIES,
  };
};
export const postIsVisible = (isVisible) => {
  return {
    type: types.POST_IS_VISIBLE,
    payload: { isVisible },
  };
};
export const changeActivityProgress = (changedActivity) => {
  return {
    type: types.CHANGE_ACTIVITY_PROGRESS,
    payload: { changedActivity },
  };
};
