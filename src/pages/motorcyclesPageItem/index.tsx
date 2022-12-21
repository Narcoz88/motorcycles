import React, {useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
// import {fetchMotorcycle} from "../../store/action-creator/motorcycle";
import classes from './MotorcyclesPageItem.module.scss';

const MotorcyclesPageItem: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const {id} = useParams();
    const {motorcycle, loading, error} = useTypedSelector(state => state.motorcycle);
    const dispatch: Dispatch<any> = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchMotorcycle(id));
    // }, [dispatch, id]);
    useEffect(() => {
        dispatch({type: "LOAD_MOTORCYCLE", payload: id});
    }, [dispatch, id]);
    console.log('moto: ', motorcycle);

    if(loading) {
        return <h1>Идёт загрузка...</h1>;
    }

    if(error) {
        return <h1>Извините, произошла какая то ошибка при загрузке моторцайклов</h1>;
    }
    return (
        <div className={classes.MotorcyclesPageItem}>
            <button onClick={goBack}>Назад</button>
            <h1 className={classes.title}><span>{motorcycle.brand} {motorcycle.model}</span> {motorcycle.price} р.</h1>
            <div className={classes.wrapInfo}>
                <div>
                    <div className={classes.info}>
                        <div className={classes.infoItem}>
                            <span className={classes.infoItemTitle}>Тип:</span> {motorcycle.type}
                        </div>
                        <div className={classes.infoItem}>
                            <span className={classes.infoItemTitle}>Год выпуска:</span> {motorcycle.year}
                        </div>
                        <div className={classes.infoItem}>
                            <span className={classes.infoItemTitle}>Пробег:</span> {motorcycle.odometer}
                        </div>
                        <div className={classes.infoItem}>
                            <span className={classes.infoItemTitle}>Цвет:</span> {motorcycle.color}
                        </div>
                        <div className={classes.infoItem}>
                            <span className={classes.infoItemTitle}>Двигатель:</span> {motorcycle.volume}см³ / {motorcycle.hp}л.с.
                        </div>
                        <div className={classes.infoItem}>
                            <span className={classes.infoItemTitle}>Цилиндров:</span> {motorcycle.numberOfCylinders} / {motorcycle.cylinderArrangement}
                        </div>
                        <div className={classes.infoItem}>
                            <span className={classes.infoItemTitle}>Тактов:</span> {motorcycle.numberOfClockCycles}
                        </div>
                        <div className={classes.infoItem}>
                            <span className={classes.infoItemTitle}>Привод:</span> {motorcycle.drive}
                        </div>
                    </div>
                </div>
                <div className={classes.gallery}>
                    <img src={motorcycle.preview} alt="pic"/>
                </div>
            </div>
            <div className={classes.description}>
                <h2 className={classes.titleDescription}>Комментарий продавца</h2>
                {motorcycle.description}
            </div>
        </div>
    )
};

export default MotorcyclesPageItem;