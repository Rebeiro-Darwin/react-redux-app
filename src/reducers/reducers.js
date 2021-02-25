import {
    FETCH_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILED,
    UPDATE_SUCCESS,
    UPDATE_FAILED,
    HIDE_NOTIFICATION,
} from "../actions/types";

// Initial state
const initialState = {
    data: [],
    isLoading: true,
    updateStatus: null,
};

// Our root reducer starts with the initial state
// and must return a representation of the next state
export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false,
            };
        case FETCH_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
            };
        case UPDATE_SUCCESS:
            return {
                ...state,
                updateStatus: action.payload.status,
            };
        case UPDATE_FAILED:
            return {
                ...state,
                updateStatus: action.payload.status,
            };
        case HIDE_NOTIFICATION:
            return {
                ...state,
                updateStatus: null,
            }
        default:
            return state;
    }
};
