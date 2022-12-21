import {IMotorcyclesState, MotorcyclesAction, MotorcyclesActionTypes} from "../../types/motorcycles";

const initialState: IMotorcyclesState = {
    motorcycles: [],
    loading: false,
    error: null,
};

export const motorcyclesReducer = (state = initialState, action: MotorcyclesAction): IMotorcyclesState => {
    switch (action.type) {
        case MotorcyclesActionTypes.FETCH_MOTORCYCLES:
            return {loading: true, error: null, motorcycles: []};
        case MotorcyclesActionTypes.FETCH_MOTORCYCLES_SUCCESS:
            return {loading: false, error: null, motorcycles: action.payload};
        case MotorcyclesActionTypes.FETCH_MOTORCYCLES_ERROR:
            return {loading: false, error: action.payload, motorcycles: []};
        default:
            return state;
    }
};