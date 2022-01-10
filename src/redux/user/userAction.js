import { FETCH_USERS_REQUEST } from "./userTypes";
import { FETCH_USERS_SUCCESS } from "./userTypes";
import { FETCH_USERS_SUCCESS } from "./userTypes";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
};

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
};