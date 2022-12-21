import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import * as yup from "yup";
import {IValuesLogin} from "../../types/register";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import classes from "./Login.module.scss";

interface ILocation {
    hash: string
    key: string
    pathname: string
    search: string
    state: any
}

const Login: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const {auth, loading, error} = useTypedSelector(state => state.auth);
    const navigate = useNavigate();
    const location:ILocation = useLocation();
    const fromPage = location.state?.from?.pathname || "/";
    console.log("Пришли сюда со страницы: ", fromPage);
    const validationsSchema = yup.object().shape({
        email: yup.string().email("Введите верный email").required("Обязательно"),
        password: yup.string().typeError("Должно быть строкой").required("Обязательно"),
    });
    return (
        <div className="pageWrap">
            <h1>Вход</h1>
            <div className={classes.wrapForm}>
                <Formik initialValues={{
                    email: '',
                    password: ''
                }}
                        validateOnBlur
                        onSubmit={(values: IValuesLogin, {resetForm}) => {
                            dispatch({type: 'LOGIN', payload: values});
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
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {touched.email && errors.email && <p>{errors.email}</p>}
                                <br/>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Пароль"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {touched.password && errors.password && <p>{errors.password}</p>}
                                <br/>
                                <button className={classes.btn}
                                    disabled={!isValid && !dirty}
                                    type="submit"
                                >Войти</button>
                                или <button onClick={() => navigate('/register')}>Зарегестрироваться</button>
                            </Form>
                        )
                    }
                </Formik>
                <br/>
                {error && <div>Ой йой! Ошибочка вышла. {error}</div>}
                {auth && <div>Поздравляем! Вход выполнен успешно.</div>}
            </div>
        </div>
    )
};

export default Login;