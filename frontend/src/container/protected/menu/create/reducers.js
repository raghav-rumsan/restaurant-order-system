import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    dishName: "",
    price: "",
    image: "",
    foodType: "",
    dishType: "" || null,
    drinkPreference: "" || null,
    dishPreference: "" || null,
  },
  foodTypes: [
    {
      value: "drink",
      label: "Drink",
    },
    {
      value: "dish",
      label: "Dish",
    },
  ],
  dishPreferences: [
    {
      value: "veg",
      label: "Veg",
    },
    {
      value: "non-veg",
      label: "Non-veg",
    },
  ],
  drinkPreferences: [
    {
      value: "beverage",
      label: "Beverage",
    },
    {
      value: "hard",
      label: "Hard",
    },
    {
      value: "soft",
      label: "Soft",
    },
  ],
  dishTypes: [
    {
      value: "buff",
      label: "Buff",
    },
    {
      value: "chicken",
      label: "Chicken",
    },
  ],
  error: {
    message: "",
  },
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_DATA:
        draft.data[action.payload.key] = action.payload.value;
        break;
      case types.CREATE_MENU_ITEM_REQUEST:
        draft.loading = true;
        break;
      case types.CREATE_MENU_ITEM_SUCCESS:
        // draft.data = INITIAL_STATE.data;
        draft.loading = false;
        break;
      case types.CREATE_MENU_ITEM_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      // default:
      //   return INITIAL_STATE;
    }
  });

export default reducer;
