import { createClients } from "../../../../api";
import * as types from "./types";

export const setDataValue = (payload) => ({
  type: types.SET_DATA,
  payload,
});

export const clientCreateRequest = (payload) => ({
  type: types.CREATE_CLIENT_REQUEST,
  payload,
});

export const clientCreateSuccess = (payload) => ({
  type: types.CREATE_CLIENT_SUCCESS,
  payload,
});

export const clientCreateFailure = (payload) => ({
  type: types.CREATE_CLIENT_FAILURE,
  payload,
});

export const clientCreate = (data) => async (dispatch) => {
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
          message: err.response.data.error,
        })
      );
    } else {
      dispatch(clientCreateFailure({ message: err.message }));
    }
    throw err;
  }
};
