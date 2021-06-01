import {
  RESET_DETAILS,
  UPDATE_DETAILS_BUDGET,
  UPDATE_DETAILS_PARTICIPANTS,
  UPDATE_DETAIL_ACCESSABILITY,
  UPDATE_DETAIL_TYPE,
} from "../actions/actionType";

const storageKey = "detailsKey";
const details = {
  type: "",
  participants: 1,
  minprice: 0,
  maxprice: 1,
  minaccessability: 0,
  maxaccessability: 1,
};
const detail = localStorage.setItem(storageKey, JSON.stringify(details));
console.log(detail);
const initialState = {
  details: {
    type: "",
    participants: 1,
    minprice: JSON.parse(localStorage.getItem(storageKey.minprice)) ?? 0,
    maxprice: JSON.parse(localStorage.getItem(storageKey.maxprice)) ?? 1,
    minaccessability: 0,
    maxaccessability: 1,
  },
};

const detailReducers = (state = initialState, action) => {
  const details = JSON.parse(localStorage.getItem(storageKey));
  switch (action.type) {
    case UPDATE_DETAIL_ACCESSABILITY:
      return {
        ...state,
        details: {
          ...state.details,
          minaccessability: action.payload.minaccessability,
          maxaccessability: action.payload.maxaccessability,
        },
      };
    case UPDATE_DETAILS_BUDGET:
      details["minprice"] = action.payload.minprice;
      details["maxprice"] = action.payload.maxprice;

      localStorage.setItem(storageKey, JSON.stringify(details));

      return {
        details: {
          details,
        },
      };

    case UPDATE_DETAILS_PARTICIPANTS:
      return {
        ...state,
        details: {
          ...state.details,
          participants: action.payload.participants,
        },
      };
    case UPDATE_DETAIL_TYPE:
      return {
        ...state,
        details: {
          ...state.details,
          type: action.payload.type,
        },
      };
    case RESET_DETAILS:
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
