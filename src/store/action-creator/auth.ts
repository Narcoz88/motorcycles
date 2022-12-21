import {AuthTypes, AuthAction} from "../../types/auth";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            // dispatch({type: AuthTypes.FETCH_AUTH});
            // const response = await axios.get('http://localhost:3001/auth');
            // console.log("response", response.data.auth);
            // dispatch({type: AuthTypes.FETCH_AUTH_SUCCESS, payload: true});
        } catch (e) {
            dispatch({
                type: AuthTypes.FETCH_AUTH_ERROR,
                payload: 'Error: Произошла ошибка при загрузке авторизации'
            })
        }
    }
};