import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from "./types";
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