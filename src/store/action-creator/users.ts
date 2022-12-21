import {UsersTypes, UsersAction} from "../../types/users";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersTypes.FETCH_USERS});
            const response = await axios.get('http://localhost:3001/users');
            setTimeout(() => {
                dispatch({type: UsersTypes.FETCH_USERS_SUCCESS, payload: response.data});
            }, 500);
        } catch (e) {
            dispatch({
                type: UsersTypes.FETCH_USERS_ERROR,
                payload: 'Error: Произошла ошибка при загрузке пользователей'
            })
        }
    }
};