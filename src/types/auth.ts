export enum AuthTypes {
    FETCH_AUTH = 'FETCH_AUTH',
    FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS',
    FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR',
}

export interface IAuthState {
    auth: boolean;
    loading: boolean;
    error: null | string;
}

interface IFetchAuthAction {
    type: AuthTypes.FETCH_AUTH;
}

interface IFetchAuthSuccessAction {
    type: AuthTypes.FETCH_AUTH_SUCCESS;
    payload: any;
}

interface IFetchAuthErrorAction {
    type: AuthTypes.FETCH_AUTH_ERROR;
    payload: string
}

export type AuthAction = IFetchAuthAction | IFetchAuthSuccessAction | IFetchAuthErrorAction;