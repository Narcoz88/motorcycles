import React, {useEffect} from 'react';
import MotorcyclesList from "../../components/MotorcyclesList";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";



const MotorcyclesPage: React.FC = () => {
    const {motorcycles, loading, error} = useTypedSelector(state => state.motorcycles);
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        dispatch({type: "LOAD_MOTORCYCLES_LIST", payload: `?_page=1&_limit=6`});
    }, [dispatch]);
    let isLoaded = motorcycles.length !==0;
    return (
        <div className="pageWrap">
            <h1>Моторцайклы</h1>
            <h2>Здесь Вы можете подобрать и купить себе моторцайкл.</h2>

            {loading && <div>ГРУЗИТСЯ</div>}
            {error && <div>ОЧИБКА</div>}
            {isLoaded && <MotorcyclesList initialList={motorcycles} />}
        </div>
    )
};

export default MotorcyclesPage;