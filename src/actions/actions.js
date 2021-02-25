import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED, UPDATE_SUCCESS, UPDATE_FAILED, HIDE_NOTIFICATION } from "./types";
import service from "../service";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA }); //Loading data
  service
    .getData()
    .then((res) =>
      dispatch({
        type: FETCH_DATA_SUCCESS,  //Loading ends
        payload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: FETCH_DATA_FAILED,  //failed to fetch data
        payload: err.response,
      })
    );
};

export const updateData = (id) => (dispatch) => {
  service
    .updateData(id)
    .then((res) =>
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_FAILED,
        payload: err.response,
      })
    );
};

export const hideNotification = () => (dispatch) => {
  dispatch({type: HIDE_NOTIFICATION })
};