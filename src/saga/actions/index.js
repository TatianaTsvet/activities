import * as t from "./actionType";

export const updateDetailsBudget = (minprice, maxprice) => {
  return {
    type: t.UPDATE_DETAILS_BUDGET,
    payload: { minprice, maxprice },
  };
};

export const updateDetailsParticipants = (participants) => {
  return {
    type: "updateDetailsParticipants",
    payload: { participants },
  };
};
export const updateDetailsAccessability = (
  minaccessability,
  maxaccessability
) => {
  return {
    type: "updateDetailsAccessability",
    payload: { minaccessability, maxaccessability },
  };
};

export const updateDetailsType = (type) => {
  return {
    type: "updateDetailsType",
    payload: { type },
  };
};

export const activityFetched = (randomActivity) => {
  return {
    type: "activityFetched",
    payload: { randomActivity },
  };
};
export const addItemToMyList = (randomActivity) => {
  return {
    type: "addItemToMyList",
    payload: { randomActivity },
  };
};
export const deleteActivityItem = (key) => {
  return {
    type: "deleteActivityItem",
    payload: { key },
  };
};
export const showSuccess = (success) => {
  return {
    type: "showSuccess",
    payload: { success },
  };
};
export const closeToast = (success) => {
  return {
    type: "closeToast",
    payload: { success },
  };
};

export const changeError = (error) => {
  return {
    type: "changeError",
    payload: { error },
  };
};
export const switchSpinner = (loading) => {
  return {
    type: "switchSpinner",
    payload: { loading },
  };
};

export const activitiesInList = (activity) => {
  return {
    type: "activitiesInList",
    payload: { activity },
  };
};

export const activitiesInMyList = (activitiesInMyList) => {
  return {
    type: "activitiesInMyList",
    payload: { activitiesInMyList },
  };
};

export const resetDetails = (details) => {
  return {
    type: "resetDetails",
    payload: { details },
  };
};
export const closeRepeatedToast = (repeatedActivity) => {
  return {
    type: "closeRepeatedToast",
    payload: { repeatedActivity },
  };
};
export const saveAgainActivity = (repeatedActivity) => {
  return {
    type: "saveAgainActivity",
    payload: { repeatedActivity },
  };
};
