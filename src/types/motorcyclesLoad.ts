export enum MotorcyclesLoadActionTypes {
    FETCH_MOTORCYCLES_LOAD = 'FETCH_MOTORCYCLES_LOAD',
    FETCH_MOTORCYCLES_SUCCESS_LOAD = 'FETCH_MOTORCYCLES_SUCCESS_LOAD',
    FETCH_MOTORCYCLES_ERROR_LOAD = 'FETCH_MOTORCYCLES_ERROR_LOAD',
}

export interface IMotorcyclesLoadState {
    motorcyclesLoad: any[];
    loading: boolean;
    error: null | string;
}

interface IFetchMotorcyclesLoadAction {
    type: MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_LOAD;
}

interface IFetchMotorcyclesLoadSuccessAction {
    type: MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_SUCCESS_LOAD;
    payload: any[];
}

interface IFetchMotorcyclesLoadErrorAction {
    type: MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_ERROR_LOAD;
    payload: string;
}

export type MotorcyclesLoadAction = IFetchMotorcyclesLoadAction | IFetchMotorcyclesLoadSuccessAction | IFetchMotorcyclesLoadErrorAction;