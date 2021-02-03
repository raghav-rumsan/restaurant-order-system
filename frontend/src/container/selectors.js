import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

const selectGlobal = (state) => state.global || INITIAL_STATE;

export const selectToken = createSelector(
  [selectGlobal],
  (state) => state.tokens
);

export const selectAccessToken = createSelector(
  [selectToken],
  (token) => token.access.token
);

export const selectIsLoggedIn = createSelector(
  [selectAccessToken],
  (token) => !!token
);
export const selectUser = createSelector([selectGlobal], (state) => state.user);
export const selectClient = createSelector(
  [selectGlobal],
  (state) => state.client
);

export const selectTheme = createSelector(
  [selectGlobal],
  (state) => state.theme
);
