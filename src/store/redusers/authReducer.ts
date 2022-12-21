import {AuthTypes, IAuthState, AuthAction} from "../../types/auth";

const initialState: IAuthState = {
    auth: false,
    loading: false,
    error: null,
};

export const authReducer = (state = initialState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case AuthTypes.FETCH_AUTH:
            return {loading: true, error: null, auth: false};
        case AuthTypes.FETCH_AUTH_SUCCESS:
            return {loading: false, error: null, auth: action.payload};
        case AuthTypes.FETCH_AUTH_ERROR:
            return {loading: false, error: action.payload, auth: false};
        default:
            return state;
    }
};