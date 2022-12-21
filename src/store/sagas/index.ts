import {takeEvery, put, call, fork, all, StrictEffect} from "redux-saga/effects";
import axios from "axios";
import {MotorcyclesActionTypes} from "../../types/motorcycles";
import {MotorcycleActionTypes} from "../../types/motorcycle";
import {MotorcyclesLoadActionTypes} from "../../types/motorcyclesLoad";
import {IValues} from "../../types/register";
import {AuthTypes} from "../../types/auth";


const getMotorcycles = async(query?: string) => {
    const request = await axios.get(`http://localhost:3001/motorcycles${query}`);
    return request;
};

const getMotorcycle = async(id:string) => {
    const request = await axios.get(`http://localhost:3001/motorcycles/${id}`);
    return request;
};

const sendRegister = async(values: IValues) => {
    await axios.post('http://localhost:3001/register', {...values})
};

const sendLogin = async(values: IValues) => {
    await axios.post('http://localhost:3001/login', {...values})
};

export function* workerSagaListMotorcycles(action: any): Generator<StrictEffect> {
    try {
        yield put({type: MotorcyclesActionTypes.FETCH_MOTORCYCLES});
        const data: any = yield call(getMotorcycles, action.payload);
        yield put({type: MotorcyclesActionTypes.FETCH_MOTORCYCLES_SUCCESS, payload: data.data});
    } catch (e: any) {
        yield put({
            type: MotorcyclesActionTypes.FETCH_MOTORCYCLES_ERROR,
            payload: `Error: Произошла ошибка при загрузке моторцайклов ${e.message}`
        })
    }
}

export function* workerSagaLoadListMotorcycles(action:any): Generator<StrictEffect> {
    try {
        const data: any = yield call(getMotorcycles, action.payload);
        yield put({type: MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_SUCCESS_LOAD, payload: data.data});
    } catch (e: any) {
        yield put({
            type: MotorcyclesLoadActionTypes.FETCH_MOTORCYCLES_ERROR_LOAD,
            payload: `Error: Произошла ошибка при загрузке моторцайклов ${e.message}`
        })
    }
}

export function* workerSagaMotorcycle(action: any): Generator<StrictEffect> {
    try {
        yield put({type: MotorcycleActionTypes.FETCH_MOTORCYCLE});
        const data: any = yield call(getMotorcycle, action.payload);
        yield put({type: MotorcycleActionTypes.FETCH_MOTORCYCLE_SUCCESS, payload: data.data});
    } catch (e: any) {
        yield put({
            type: MotorcycleActionTypes.FETCH_MOTORCYCLE_ERROR,
            payload: `Error: Произошла ошибка при загрузке моторцайкла ${e.message}`
        });
    }
}

export function* workerSagaRegister(action: any): Generator<StrictEffect> {
    try {
        yield call(sendRegister, action.payload);
        yield put({
            type: AuthTypes.FETCH_AUTH_SUCCESS,
            payload: true
        });
        console.log('сработало');
        localStorage.setItem("auth", "true");
    } catch (e: any) {
        console.log('ошибка', e);
        localStorage.removeItem("auth");
        yield put({
            type: AuthTypes.FETCH_AUTH_ERROR,
            payload: `Error: Произошла ошибка при рэгистрации. ${e.response.data === "Email already exists" ? "Пользователь с такой электронной почтой уже существует. Повторите попытку рэгистрации снова." : e.response.data}`
        });
    }
}

export function* workerSagaLogin(action: any): Generator<StrictEffect> {
    try {
        yield call(sendLogin, action.payload);
        yield put({
            type: AuthTypes.FETCH_AUTH_SUCCESS,
            payload: true
        });
        console.log('сработало');
        localStorage.setItem("auth", "true");
    } catch (e: any) {
        console.log('ошибка', e);
        localStorage.removeItem("auth");
        yield put({
            type: AuthTypes.FETCH_AUTH_ERROR,
            payload: `Error: Произошла ошибка при рэгистрации. ${e.response.data === "Email already exists" ? "Пользователь с такой электронной почтой уже существует. Повторите попытку рэгистрации снова." : e.response.data}`
        });
    }
}

export function* watchListSaga(): Generator<StrictEffect> {
    yield takeEvery("LOAD_MOTORCYCLES_LIST", workerSagaListMotorcycles);
}

export function* watchLoadListSaga(): Generator<StrictEffect> {
    yield takeEvery("LOAD_MOTORCYCLES_LOAD_LIST", workerSagaLoadListMotorcycles);
}

export function* watchDetailsSaga(): Generator<StrictEffect> {
    yield takeEvery("LOAD_MOTORCYCLE", workerSagaMotorcycle);
}

export function* watchRegisterSaga(): Generator<StrictEffect> {
    yield takeEvery("REGISTER", workerSagaRegister);
}
export function* watchLoginSaga(): Generator<StrictEffect> {
    yield takeEvery("LOGIN", workerSagaLogin);
}

export default function* rootSaga() {
    yield all([
        fork(watchListSaga),
        fork(watchLoadListSaga),
        fork(watchDetailsSaga),
        fork(watchRegisterSaga),
        fork(watchLoginSaga)
    ])
}