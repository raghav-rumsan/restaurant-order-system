import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    limit: "",
    results: [],
  },
  error: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_CLIENTS_LIST_REQUEST:
        draft.loading = true;
        break;
      case types.GET_CLIENTS_LIST_SUCCESS:
        draft.data = action.payload;
        draft.loading = false;
        break;
      case types.GET_CLIENTS_LIST_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
    }
  });

export default reducer;
