import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import classes from './Motorcycles.module.scss';
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";


interface Props {
    initialList: IData[];
}

interface IData {
    id: string,
    brand: string,
    type: string,
    model: string,
    year: number,
    volume: number,
    hp: number,
    odometer: number,
    numberOfCylinders: number,
    numberOfClockCycles: number,
    drive: string,
    cylinderArrangement: string,
    price: number,
    preview: string,
    images: string[],
    description: string
}

const MotorcyclesList: React.FC<Props> = ({initialList}) => {
    const {motorcyclesLoad} = useTypedSelector(state => state.motorcyclesLoad);
    const [ list, setList ] = useState<IData[]>([...initialList]);
    const [ next, setNext ] = useState(2);
    const [ count, setCount ] = useState(30);
    const [ isMore, setIsMore ] = useState(true);

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        setList([...list, ...motorcyclesLoad]);
    }, [motorcyclesLoad]);

    const nextPage = (): void => {
        if(list.length >= count) {
            setIsMore(false);
        } else {
            dispatch({type: "LOAD_MOTORCYCLES_LOAD_LIST", payload: `?_page=${next}&_limit=6`});
            setNext(next + 1);
        }
    };

    return (
        <div className={classes.MotorcyclesList}>
            <div>
                <span>Марка</span>
                <span>Модель</span>
                <span>Год</span>
                <span>Цена</span>
                <span>Мощность</span>
                <span>Пробег</span>
                <span>Цвет</span>
            </div>
            <InfiniteScroll
                dataLength={list.length}
                next={nextPage}
                hasMore={isMore}
                loader={<h4>Loading...</h4>}
                className={classes.cardList}
            >
                {list.map((item: IData) => {
                    return (
                        <Link to={`/motorcycles/${item.id}`} className={classes.item} key={item.id}>
                            <div className={classes.itemWrap}>
                                <div className={classes.wrapImage}>
                                    <img className={classes.image} src={item.preview} alt="pic" title={item.preview}/>
                                </div>
                                <p className={classes.title}><span>{item.brand} {item.model}</span><span>{item.year}г.</span></p>
                                <p className={classes.title}><span>{item.odometer.toLocaleString()}км.</span><span>{item.price.toLocaleString()}р.</span></p>
                            </div>
                        </Link>
                    )
                })}
            </InfiniteScroll>
        </div>
    )
};

export default MotorcyclesList;