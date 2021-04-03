import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducers";

export const reduxKey = "admin_create_menu_item";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectData = createSelector([selectRoot], (state) => state.data);

export const selectError = createSelector([selectRoot], (state) => state.error);

export const selectFoodTypes = createSelector(
  [selectRoot],
  (state) => state.foodTypes
);

export const selectFoodPreferences = createSelector(
  [selectRoot],
  (state) => state.foodPreferences
);

export const selectDishPreferences = createSelector(
  [selectRoot],
  (state) => state.dishPreferences
);
export const selectDishTypes = createSelector(
  [selectRoot],
  (state) => state.dishTypes
);
export const selectDrinkPreferences = createSelector(
  [selectRoot],
  (state) => state.drinkPreferences
);
