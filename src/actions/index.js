export const updateDetailsBudget = (minprice, maxprice) => {
  return {
    type: "updateDetailsBudget",
    payload: { minprice, maxprice },
  };
};

export const updateDetailsParticipants = (participants) => {
  return {
    type: "updateDetailsParticipants",
    payload: participants,
  };
};

export const updateDetailsType = (type) => {
  return {
    type: "updateDetailsType",
    payload: type,
  };
};

export const activityFetched = (randomActivity) => {
  return {
    type: "activityFetched",
    payload: randomActivity,
  };
};
export const addItemToMyList = (activity) => {
  return {
    type: "addItemToMyList",
    payload: activity,
  };
};
export const deleteActivityItem = (key) => {
  return {
    type: "deleteActivityItem",
    payload: key,
  };
};
