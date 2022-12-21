import React from 'react';
import Nav from './Nav';
import classes from './Header.module.scss';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {AuthTypes} from "../../types/auth";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface IIsActive {
    isActive: boolean
}

const setActive = ({ isActive }: IIsActive): string => isActive ? `${classes.hvrShutterOutVertical} ${classes.active}` : classes.hvrShutterOutVertical;


const Header: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    let isAuth = localStorage.getItem("auth");
    const {auth, loading, error} = useTypedSelector(state => state.auth);
    const logOut = () => {
        localStorage.removeItem("auth");
        dispatch({
            type: AuthTypes.FETCH_AUTH_SUCCESS,
            payload: false
        })

    };
    return (
        <header className={classes.Header}>
            <div className='container'>
                <div className={classes.headerWrap}>
                    <div className={classes.left}>
                        <Link to="/"><img className={classes.logo} src="../logo2.png" alt="pic"/></Link>
                        <Nav/>
                    </div>
                    {auth ? <button className={classes.hvrShutterOutVertical} onClick={logOut}>Выйти</button> : <nav>
                        <ul>
                            <li>
                                <NavLink to="/login" className={setActive}>Войти</NavLink>
                            </li>
                        </ul>
                    </nav>}


                    {/*<Link to="/register" className={classes.login}>Регистрация</Link>*/}
                </div>
            </div>
        </header>
    );
};

export default Header;