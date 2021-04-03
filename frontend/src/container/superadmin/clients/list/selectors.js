import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducers";

export const reduxKey = "client_list_sa";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);
export const selectData = createSelector([selectRoot], (state) => state.data);

export const selectClientsList = createSelector([selectData], (state) =>
  state.results.map((res) => ({
    ...res,
    key: res.id,
  }))
);

export const selectError = createSelector([selectRoot], (state) => state.error);
