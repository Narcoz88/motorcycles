import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import * as yup from "yup";
import {Field, Form, Formik} from "formik";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
// import {fetchRegister} from "../../store/action-creator/register";
import {useRedirect} from "../../hooks/useRedirect";
import {IValues} from "../../types/register";
// import axios from "axios";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchAuth} from "../../store/action-creator/auth";
import classes from "./Register.module.scss";

interface ILocation {
    hash: string
    key: string
    pathname: string
    search: string
    state: any
}

const Register: React.FC = () => {
    const {auth, loading, error} = useTypedSelector(state => state.auth);
    // const [auth, setAuth] = useState(false);
    let isAuth = localStorage.getItem("auth");
    const location:ILocation = useLocation();
    console.log("auth: ", auth);
    console.log("location: ", location);
    const fromPage = location.state?.from?.pathname || "/";

    const dispatch: Dispatch<any> = useDispatch();

    interface IValues {
        email: string;
        login: string;
        password: string;
        passwordConfirm: string;
    }

    const validationsSchema = yup.object().shape({
        email: yup.string().email("Введите верный email").required("Обязательно"),
        login: yup.string().typeError("Должно быть строкой").required("Обязательно"),
        password: yup.string().typeError("Должно быть строкой").required("Обязательно"),
        passwordConfirm: yup.string().oneOf([yup.ref("password")], "Пароли не совпадают").required("Обязательно"),
    });
    const navigate = useNavigate();
    // const reg = (values: IValues) => {
    //     console.log(values);
    //     dispatch(fetchRegister(values));
    // };

    // useEffect(() => {
    //     if (auth) {
    //         navigate('/add');
    //     }
    // }, [auth]);



    return (
        <div className="pageWrap">
            <h1>Регистрация</h1>
            <p>Пришли сюда со страницы "{fromPage}"</p>
            <div className={classes.wrapForm}>
                <Formik initialValues={{
                    email: '',
                    password: '',
                    passwordConfirm: '',
                    login: ''
                }}
                        validateOnBlur
                        onSubmit={(values: IValues, {resetForm}) => {
                            dispatch({type: 'REGISTER', payload: values});
                            resetForm();
                        }}
                        validationSchema={validationsSchema}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>
                        (
                            <Form>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {touched.email && errors.email && <p>{errors.email}</p>}
                                <br/>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Пароль не менее 4 символов"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {touched.password && errors.password && <p>{errors.password}</p>}
                                <br/>
                                <Field
                                    type="password"
                                    name="passwordConfirm"
                                    placeholder="Повторите пароль"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordConfirm}
                                />
                                {touched.passwordConfirm && errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
                                <br/>
                                <Field
                                    type="text"
                                    name="login"
                                    placeholder="Логин"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.login}
                                />
                                {touched.login && errors.login && <p>{errors.login}</p>}
                                <br/>
                                <button className={classes.btn}
                                    disabled={!isValid && !dirty}
                                    type="submit"
                                >Зарегестрироваться</button>
                            </Form>
                        )
                    }
                </Formik>
                <br/>
                {error && <div>ОЧИБКА {error}</div>}
                {auth && <div>Поздравляем! Рэгистрация прошла успешно.</div>}
            </div>
        </div>
    )
};

export default Register;