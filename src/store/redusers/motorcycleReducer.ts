import {IMotorcycle, IMotorcycleState, MotorcycleAction, MotorcycleActionTypes} from "../../types/motorcycle";
const initialState: IMotorcycleState = {
    motorcycle: {
        id: '',
        brand: '',
        type: '',
        model: '',
        color: '',
        year: 0,
        volume: 0,
        hp: 0,
        odometer: 0,
        numberOfCylinders: 0,
        numberOfClockCycles: 0,
        drive: '',
        cylinderArrangement: '',
        price: 0,
        preview: '',
        images: [],
        description: '',
    },
    loading: false,
    error: null,
};

export const motorcycleReducer = (state = initialState, action: MotorcycleAction): IMotorcycleState => {
    switch (action.type) {
        case MotorcycleActionTypes.FETCH_MOTORCYCLE:
            return {loading: true, error: null, motorcycle: {} as IMotorcycle};
        case MotorcycleActionTypes.FETCH_MOTORCYCLE_SUCCESS:
            return {loading: false, error: null, motorcycle: action.payload};
        case MotorcycleActionTypes.FETCH_MOTORCYCLE_ERROR:
            return {loading: false, error: action.payload, motorcycle: {} as IMotorcycle};
        default:
            return state;
    }
};