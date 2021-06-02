import {
  RESET_DETAILS,
  UPDATE_DETAILS_BUDGET,
  UPDATE_DETAILS_PARTICIPANTS,
  UPDATE_DETAIL_ACCESSABILITY,
  UPDATE_DETAIL_TYPE,
} from "../actions/actionType";

const storageKey = "details";

const defaultState = {
  type: "",
  participants: 1,
  minprice: 0,
  maxprice: 1,
  minaccessability: 0,
  maxaccessability: 1,
};

const detailReducers = (state = defaultState, action) => {
  const { payload } = action;

  let newState = state;

  switch (action.type) {
    case UPDATE_DETAIL_ACCESSABILITY:
      const { minaccessability, maxaccessability } = payload;
      newState = {
        ...state,
        minaccessability,
        maxaccessability,
      };
      break;
    case UPDATE_DETAILS_BUDGET:
      const { minprice, maxprice } = payload;

      newState = {
        ...state,
        minprice,
        maxprice,
      };
      break;

    case UPDATE_DETAILS_PARTICIPANTS:
      const { participants } = payload;

      newState = {
        ...state,
        participants,
      };
      break;

    case UPDATE_DETAIL_TYPE:
      const { type } = payload;
      newState = {
        ...state,
        type,
      };
      break;

    case RESET_DETAILS:
      newState = {
        ...defaultState,
      };
      break;

    default:
      newState = state;
  }

  try {
    localStorage.setItem(storageKey, JSON.stringify(newState));
  } catch {}
  return newState;
};

export default detailReducers;
