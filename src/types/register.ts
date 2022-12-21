export enum RegisterTypes {
    FETCH_REGISTER = 'FETCH_REGISTER',
    FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS',
    FETCH_REGISTER_REDIRECT = 'FETCH_REGISTER_REDIRECT',
    FETCH_REGISTER_ERROR = 'FETCH_REGISTER_ERROR',
}

export interface IRegisterState {
    auth: false;
    loading: boolean;
    error: null | string;
}

export interface IValues {
    email: string;
    login: string;
    password: string;
    passwordConfirm: string;
}

export interface IValuesLogin {
    email: string;
    password: string;
}

interface IFetchRegisterAction {
    type: RegisterTypes.FETCH_REGISTER;
}

interface IFetchRegisterSuccessAction {
    type: RegisterTypes.FETCH_REGISTER_SUCCESS;
    payload: any;
}

interface IFetchRegisterRedirectAction {
    type: RegisterTypes.FETCH_REGISTER_REDIRECT;
}

interface IFetchRegisterErrorAction {
    type: RegisterTypes.FETCH_REGISTER_ERROR;
    payload: string;
}

export type RegisterAction = IFetchRegisterAction | IFetchRegisterSuccessAction | IFetchRegisterRedirectAction | IFetchRegisterErrorAction;