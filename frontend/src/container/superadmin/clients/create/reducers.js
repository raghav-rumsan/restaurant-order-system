import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    email: "",
    phone: "",
    name: "",
    password: "",
  },
  error: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_DATA:
        draft.data[action.payload.key] = action.payload.value;
        break;
      case types.CREATE_CLIENT_REQUEST:
        draft.loading = true;
        break;
      case types.CREATE_CLIENT_SUCCESS:
        draft.data = INITIAL_STATE.data;
        draft.loading = false;
        break;
      case types.CREATE_CLIENT_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      default:
        return INITIAL_STATE;
    }
  });

export default reducer;
