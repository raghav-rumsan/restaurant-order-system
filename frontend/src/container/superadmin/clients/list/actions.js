import { clientsGet } from "../../../../api";
import * as types from "./types";

export const getClientsListRequest = (payload) => ({
  type: types.GET_CLIENTS_LIST_REQUEST,
  payload,
});
export const getClientsListSuccess = (payload) => ({
  type: types.GET_CLIENTS_LIST_SUCCESS,
  payload,
});
export const getClientsListFailure = (payload) => ({
  type: types.GET_CLIENTS_LIST_FAILURE,
  payload,
});

export const getClientsList = () => async (dispatch) => {
  dispatch(getClientsListRequest());
  try {
    const response = await clientsGet();
    dispatch(getClientsListSuccess(response.data));
  } catch (err) {
    if (err.response) {
      dispatch(
        getClientsListFailure({
          ...err.response.data,
          message: err.response.data.message,
        })
      );
    } else {
      dispatch(getClientsListFailure({ ...err }));
    }
    throw err;
  }
};
