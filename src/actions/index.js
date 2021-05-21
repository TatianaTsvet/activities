export const updateDetailsBudget = (minprice, maxprice) => {
  return {
    type: "updateDetailsBudget",
    payload: { minprice, maxprice },
  };
};
export const changeMinPrice = (minprice) => {
  return {
    type: "changeMinPrice",
    payload: { minprice },
  };
};
export const changeMaxPrice = (maxprice) => {
  return {
    type: "changeMaxPrice",
    payload: { maxprice },
  };
};

export const updateDetailsParticipants = (participants) => {
  return {
    type: "updateDetailsParticipants",
    payload: { participants },
  };
};
export const updateDetailasAccessability = (accessability) => {
  return {
    type: "updateDetailasAccessability",
    payload: { accessability },
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
