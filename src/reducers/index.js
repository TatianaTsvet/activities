// const initialState = {
//   activity: JSON.parse(localStorage.getItem(storageKey) ?? "[]"),
//   randomActivity: null,
//   error: false,
//   success: false,
//   loading: false,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "error":
//       return {
//         error: action.error,
//       };
//     case "randomActivity":
//       return {
//         activity: action.randomActivity,
//         loading: action.loading,
//       };
//     case "sendToMyList":
//       return {
//         activity: action.sendToMyList,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;

const initialState = {
  type: "",
  participants: 1,
  minprice: 0,
  maxprice: 1,
  accessability: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "onUpdateBudget":
      return {
        minprice: action.minprice,
        maxprice: action.maxprice,
      };
    case "onChangeParticipants":
      return {
        participants: action.participants,
      };
    case "onChangeType":
      return {
        type: action.type,
      };
    case "onUpdateAccessability":
      return {
        accessability: action.accessability,
      };
    default:
      return state;
  }
};

export default reducer;
