export enum UsersTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface IUsersState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface IFetchUsersAction {
    type: UsersTypes.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
    type: UsersTypes.FETCH_USERS_SUCCESS;
    payload: any;
}

interface IFetchUsersErrorAction {
    type: UsersTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UsersAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction;