import * as types from "./types";
import { userDetailGet } from "../api";
import { selectUser } from "./selectors";
import { INITIAL_STATE } from "./reducer";

export const setToken = (payload) => ({
  type: types.SET_TOKEN,
  payload,
});

export const getUserRequest = (payload) => ({
  type: types.GET_USER_REQUEST,
  payload,
});
export const getUserSuccess = (payload) => ({
  type: types.GET_USER_SUCCESS,
  payload,
});
export const getUserFailure = (payload) => ({
  type: types.GET_USER_FAILURE,
  payload,
});

export const getUser = () => async (dispatch, getState) => {
  const user = selectUser(getState());
  dispatch(getUserRequest(user.id));
  try {
    const response = await userDetailGet(user.id);
    dispatch(getUserSuccess(response.data));
  } catch (err) {
    if (err.response) {
      dispatch(getUserFailure(err.response.data));
    } else {
      dispatch(getUserFailure(err.message));
    }
    throw err;
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch(
    setToken({ tokens: INITIAL_STATE.tokens, user: INITIAL_STATE.user })
  );
};

// export const getClientRequest = payload => ({
//   type: types.GET_CLIENT_REQUEST,
//   payload
// });
// export const getClientSuccess = payload => ({
//   type: types.GET_CLIENT_SUCCESS,
//   payload
// });
// export const getClientFailure = payload => ({
//   type: types.GET_CLIENT_FAILURE,
//   payload
// });

// export const getClient = payload => async dispatch => {
//   dispatch(getClientRequest(payload));
//   try {
//     const response = await clientDetailGet();
//     dispatch(getClientSuccess(response.data));
//   } catch (err) {
//     if (err.response) {
//       dispatch(getClientFailure(err.response.data));
//     } else {
//       dispatch(getClientFailure(err.message));
//     }
//   }
// };

export const setTheme = (payload) => ({
  type: types.SET_THEME,
  payload,
});
