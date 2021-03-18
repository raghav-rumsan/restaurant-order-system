import * as types from "./types";

export const setDataValue = (payload) => ({
  type: types.SET_DATA,
  payload,
});
