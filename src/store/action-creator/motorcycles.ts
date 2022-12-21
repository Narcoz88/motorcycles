import {MotorcyclesAction, MotorcyclesActionTypes} from "../../types/motorcycles";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchMotorcycles = (query?: string) => {
    return async (dispatch: Dispatch<MotorcyclesAction>) => {
        try {
            // dispatch({type: MotorcyclesActionTypes.FETCH_MOTORCYCLES});
            const response = await axios.get(`http://localhost:3001/motorcycles${query}`);
            dispatch({type: MotorcyclesActionTypes.FETCH_MOTORCYCLES_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({
                type: MotorcyclesActionTypes.FETCH_MOTORCYCLES_ERROR,
                payload: 'Error: Произошла ошибка при загрузке моторцайклов'
            })
        }
    }
};

//done