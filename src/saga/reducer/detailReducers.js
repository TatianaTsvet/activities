//const detailsKey = "detailsKey";
const initialState = {
  //details: JSON.parse(localStorage.getItem(detailsKey) ?? "[]"),
  details: {
    type: "",
    participants: 1,
    minprice: 0,
    maxprice: 1,
    minaccessability: 0,
    maxaccessability: 1,
  },
};

const detailReducers = (state = initialState, action) => {
  switch (action.type) {
    case "updateDetailsAccessability":
      return {
        ...state,
        details: {
          ...state.details,
          minaccessability: action.payload.minaccessability,
          maxaccessability: action.payload.maxaccessability,
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
    case "resetDetails":
      return {
        details: {
          type: "",
          participants: 1,
          minprice: 0,
          maxprice: 1,
          minaccessability: 0,
          maxaccessability: 1,
        },
      };

    default:
      return state;
  }
};
export default detailReducers;
