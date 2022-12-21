import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from "./redusers";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)));

sagaMiddleware.run(rootSaga);