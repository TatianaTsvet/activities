const initialState = {
  details: {
    type: "",
    participants: 1,
    minprice: 0,
    maxprice: 1,
    accessability: 0,
  },
};
const reducerDetails = (state = initialState, action) => {
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
    case "changeMinPrice":
      return {
        ...state,
        details: {
          ...state.details,
          minprice: action.payload.minprice,
        },
      };
    case "changeMaxPrice":
      return {
        ...state,
        details: {
          ...state.details,
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

    default:
      return state;
  }
};
export default reducerDetails;
