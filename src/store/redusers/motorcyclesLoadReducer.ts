import {IMotorcyclesLoadState, MotorcyclesLoadAction, MotorcyclesLoadActionTypes} from "../../types/motorcyclesLoad";

const initialState: IMotorcyclesLoadState = {
    motorcyclesLoad: [],
    loading: false,
    error: null,
};

export const motorcyclesLoadReducer = (state = initialState, action: MotorcyclesLoadAction): IMotorcyclesLoadState => {
    switch (action.type) {
        case MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_LOAD:
            return {loading: true, error: null, motorcyclesLoad: []};
        case MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_SUCCESS_LOAD:
            return {loading: false, error: null, motorcyclesLoad: action.payload};
        case MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_ERROR_LOAD:
            return {loading: false, error: action.payload, motorcyclesLoad: []};
        default:
            return state;
    }
};