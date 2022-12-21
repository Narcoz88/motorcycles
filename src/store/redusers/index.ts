import {combineReducers} from "redux";
import {motorcyclesReducer} from "./motorcyclesReducer";
import {motorcyclesLoadReducer} from "./motorcyclesLoadReducer";
import {motorcycleReducer} from "./motorcycleReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import {registerReducer} from "./registerReducer";

export const rootReducer = combineReducers({
    motorcycles: motorcyclesReducer,
    motorcyclesLoad: motorcyclesLoadReducer,
    motorcycle: motorcycleReducer,
    users: usersReducer,
    auth: authReducer,
    register: registerReducer
});

export type RootState = ReturnType<typeof rootReducer>;