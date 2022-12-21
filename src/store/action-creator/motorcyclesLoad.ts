import {MotorcyclesLoadAction, MotorcyclesLoadActionTypes} from "../../types/motorcyclesLoad";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchMotorcyclesLoad = (query?: string) => {
    return async (dispatch: Dispatch<MotorcyclesLoadAction>) => {
        try {
            // dispatch({type: MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_LOAD});
            const response = await axios.get(`http://localhost:3001/motorcycles${query}`);
            dispatch({type: MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_SUCCESS_LOAD, payload: response.data});
        } catch (e) {
            dispatch({
                type: MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_ERROR_LOAD,
                payload: 'Error: Произошла ошибка при загрузке моторцайклов'
            })
        }
    }
};