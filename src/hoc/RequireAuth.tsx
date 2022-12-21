import React, {PropsWithChildren, useEffect, useState} from "react";
import { useLocation, Navigate } from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {fetchAuth} from "../store/action-creator/auth";

type Props = {
    children?: React.ReactNode
};

const RequireAuth: React.FC<PropsWithChildren<Props>> = ({children}) => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);


    let isAuth = localStorage.getItem("auth");
    console.log("isAuth", isAuth);


    const {auth, loading, error} = useTypedSelector(state => state.auth);
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        console.log("isAuth", isAuth);
    }, []);
    useEffect(() => {
        setIsLoading(false);
    }, []);

    if(loading) {
        return <h1>Идёт загрузка...</h1>;
    }

    if(error) {
        return <Navigate to="/login" state={{from: location}}/>;
    }

    if(isAuth) {
        return <>{children}</>;
    }

    return (
        <>
            {isLoading ? <h1>Идёт загрузка...</h1> :
                isAuth ? {children} :
                <Navigate to="/login" state={{from: location}}/>
            }
        </>
    );
};

export default RequireAuth;