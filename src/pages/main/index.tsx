import React from 'react';
import useResize from '../../hooks/useResize';

const MainPage: React.FC = () => {
    const { width } = useResize();
    return (
        <div className="pageWrap">
            <h1>Главная</h1>
            <h2>Ну типа, <br/> врум - врум!</h2>
            <h2>Дрынь - дынь - дынь!</h2>
            <h3>И всё такое...</h3>
            {width}
            <p>Здесь правда пока не придумал что разместить</p>
        </div>
    )
};

export default MainPage;