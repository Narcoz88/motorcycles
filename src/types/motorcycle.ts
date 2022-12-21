export enum MotorcycleActionTypes {
    FETCH_MOTORCYCLE = 'FETCH_MOTORCYCLE',
    FETCH_MOTORCYCLE_SUCCESS = 'FETCH_MOTORCYCLE_SUCCESS',
    FETCH_MOTORCYCLE_ERROR = 'FETCH_MOTORCYCLE_ERROR',
}

export interface IMotorcycle {
    id: string,
    brand: string,
    type: string,
    model: string,
    color: string,
    year: number,
    volume: number,
    hp: number,
    odometer: number,
    numberOfCylinders: number,
    numberOfClockCycles: number,
    drive: string,
    cylinderArrangement: string,
    price: number,
    preview: string,
    images: string[],
    description: string,
}

export interface IMotorcycleState {
    motorcycle: IMotorcycle,
    loading: boolean,
    error: null | string
}

interface IFetchMotorcycleAction {
    type: MotorcycleActionTypes.FETCH_MOTORCYCLE;
}

interface IFetchMotorcycleSuccessAction {
    type: MotorcycleActionTypes.FETCH_MOTORCYCLE_SUCCESS;
    payload: IMotorcycle;
}

interface IFetchMotorcycleErrorAction {
    type: MotorcycleActionTypes.FETCH_MOTORCYCLE_ERROR;
    payload: string;
}

export type MotorcycleAction = IFetchMotorcycleAction | IFetchMotorcycleSuccessAction | IFetchMotorcycleErrorAction;