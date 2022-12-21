import {UsersTypes, IUsersState, UsersAction} from "../../types/users";

const initialState: IUsersState = {
    users: [],
    loading: false,
    error: null,
};

export const usersReducer = (state = initialState, action: UsersAction): IUsersState => {
    switch (action.type) {
        case UsersTypes.FETCH_USERS:
            return {loading: true, error: null, users: []};
        case UsersTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload};
        case UsersTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []};
        default:
            return state;
    }
};