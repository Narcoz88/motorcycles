import {MotorcycleAction, MotorcycleActionTypes} from "../../types/motorcycle";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchMotorcycle = (id: string | undefined) => {
    return async (dispatch: Dispatch<MotorcycleAction>) => {
        try {
            dispatch({type: MotorcycleActionTypes.FETCH_MOTORCYCLE});
            const response = await axios.get(`http://localhost:3001/motorcycles/${id}`);
            dispatch({type: MotorcycleActionTypes.FETCH_MOTORCYCLE_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({
                type: MotorcycleActionTypes.FETCH_MOTORCYCLE_ERROR,
                payload: 'Error: Произошла ошибка при загрузке моторцайклов'
            })
        }
    }
};