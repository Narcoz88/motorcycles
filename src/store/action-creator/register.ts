import React, {useEffect} from "react";
import {RegisterTypes, RegisterAction, IValues} from "../../types/register";
import {Dispatch} from "redux";
import axios from "axios";
import {AuthAction, AuthTypes} from "../../types/auth";
import {fetchAuth} from "./auth";
import {useDispatch} from "react-redux";

export const fetchRegister = (values: IValues) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            await axios.post('http://localhost:3001/register', {...values})
                // .then(() => axios.post('http://localhost:3001/auth', {auth: true}))
                .then(() => {
                    console.log('сработало');
                    // dispatch({type: AuthTypes.FETCH_AUTH_SUCCESS, payload: true});
                    localStorage.setItem("auth", "true");
                    dispatch({
                        type: AuthTypes.FETCH_AUTH_SUCCESS,
                        payload: true
                    })
                });
        } catch (e: any) {
            console.log('ошибка', e);
            localStorage.removeItem("auth");
            dispatch({
                type: AuthTypes.FETCH_AUTH_ERROR,
                payload: `Error: Произошла ошибка при рэгистрации. ${e.response.data === "Email already exists" ? "Пользователь с такой электронной почтой уже существует. Повторите попытку рэгистрации снова." : e.response.data}`
            })
        }
    }
};