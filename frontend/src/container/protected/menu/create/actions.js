import { createClients } from "../../../../api";
import { selectData } from "./selectors";
import * as types from "./types";

export const setDataValue = (payload) => ({
  type: types.SET_DATA,
  payload,
});

export const clientCreateRequest = (payload) => ({
  type: types.CREATE_MENU_ITEM_REQUEST,
  payload,
});

export const clientCreateSuccess = (payload) => ({
  type: types.CREATE_MENU_ITEM_SUCCESS,
  payload,
});

export const clientCreateFailure = (payload) => ({
  type: types.CREATE_MENU_ITEM_FAILURE,
  payload,
});

export const clientCreate = () => async (dispatch, getState) => {
  const data = selectData(getState());
  dispatch(clientCreateRequest(data));
  try {
    const response = await createClients(data);
    dispatch(clientCreateSuccess(response.data));
    // const accessToken = `Bearer ${response.data.tokens.access.token}`;
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(
        clientCreateFailure({
          ...err.response.data,
          message: err.response.data.message,
        })
      );
    } else {
      dispatch(clientCreateFailure({ ...err }));
    }
    throw err;
  }
};
