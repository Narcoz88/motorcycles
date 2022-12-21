import React from 'react';
import {AuthTypes} from "../../types/auth";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";

const Add: React.FC = () => {
    let isAuth = localStorage.getItem("auth");
    console.log("isAuth", isAuth);
    const dispatch: Dispatch<any> = useDispatch();
    const logOut = () => {
        localStorage.removeItem("auth");
        dispatch({
            type: AuthTypes.FETCH_AUTH_SUCCESS,
            payload: false
        })

    };
    return (
        <div className="pageWrap">
            <h1>Размешение объявления</h1>
            <button onClick={logOut}>выйти</button>
        </div>
    )
};

export default Add;