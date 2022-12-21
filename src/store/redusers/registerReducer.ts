import {RegisterTypes, IRegisterState, RegisterAction} from "../../types/register";
// import {useNavigate} from "react-router-dom";

const initialState: IRegisterState = {
    auth: false,
    loading: false,
    error: null,
};

export const registerReducer = (state = initialState, action: RegisterAction): IRegisterState => {
    switch (action.type) {
        case RegisterTypes.FETCH_REGISTER:
            return {loading: true, error: null, auth: false};
        case RegisterTypes.FETCH_REGISTER_SUCCESS:
            return {loading: false, error: null, auth: action.payload};
        case RegisterTypes.FETCH_REGISTER_ERROR:
            return {loading: false, error: action.payload, auth: false};
        default:
            return state;
    }
};