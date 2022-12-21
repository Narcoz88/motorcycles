export enum MotorcyclesActionTypes {
    FETCH_MOTORCYCLES = 'FETCH_MOTORCYCLES',
    FETCH_MOTORCYCLES_SUCCESS = 'FETCH_MOTORCYCLES_SUCCESS',
    FETCH_MOTORCYCLES_ERROR = 'FETCH_MOTORCYCLES_ERROR',
}

export interface IMotorcyclesState {
    motorcycles: any[];
    loading: boolean;
    error: null | string;
}

interface IFetchMotorcyclesAction {
    type: MotorcyclesActionTypes.FETCH_MOTORCYCLES;
}

interface IFetchMotorcyclesSuccessAction {
    type: MotorcyclesActionTypes.FETCH_MOTORCYCLES_SUCCESS;
    payload: any[];
}

interface IFetchMotorcyclesErrorAction {
    type: MotorcyclesActionTypes.FETCH_MOTORCYCLES_ERROR;
    payload: string;
}

export type MotorcyclesAction = IFetchMotorcyclesAction | IFetchMotorcyclesSuccessAction | IFetchMotorcyclesErrorAction;