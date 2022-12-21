import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.scss';
import cn from "classnames";

interface IIsActive {
    isActive: boolean
}

const setActive = ({ isActive }: IIsActive): string => isActive ? `${classes.hvrShutterOutVertical} ${classes.active}` : classes.hvrShutterOutVertical;

const Nav: React.FC = () => {
    return (
        <nav>
            <ul className={classes.ul}>
                <li>
                    <NavLink to="/" className={setActive}>Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/motorcycles" className={setActive}>Моторцайклы</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={setActive}>О нас</NavLink>
                </li>
                <li>
                    <NavLink to="/add" className={setActive}><span className={classes.green}>Разместить бесплатно</span></NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;