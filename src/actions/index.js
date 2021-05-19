// onActivityFetched = (data) => {
//   if (data.error) {
//     return {
//       type: "error",
//       error: data.error,
//     };
//   }
//   return {
//     type: "randomActivity",
//     randomActivity: { ...data },
//     loading: false,
//   };
// };
// export { onActivityFetched };

// sendToMyList = (rightActivity) => {
//   return {
//     type: "rightActivity",
//     activity: rightActivity,
//   };
// };
// export { sendToMyList };

onUpdateBudget = (minprice, maxprice) => {
  return {
    type: "onUpdateBudget",
    minprice: minprice,
    maxprice: maxprice,
  };
};

onChangeParticipants = (participants) => {
  return {
    type: "onChangeParticipants",
    participants: participants,
  };
};

onChangeType = (type) => {
  return {
    type: "onChangeType",
    type: type,
  };
};

onUpdateAccessability = (accessability) => {
  return {
    type: "onUpdateAccessability",
    accessability: accessability,
  };
};

export {
  onUpdateBudget,
  onChangeType,
  onChangeParticipants,
  onUpdateAccessability,
};
