import React, { memo, useContext } from 'react';

import '../App.js';
import { useWeather } from '../hooks/useWeather.js';
import { GlobalContext } from '../App.js';

export const CardNoMemo = ({ city }) => {
    const data = useWeather(city);
    const { dispatch } = useContext(GlobalContext);
    if (!data) return null;
    const { name, weather, main } = data;
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like } = main;

    const handleOnDelete = () => {
        dispatch({
            type: 'DELETE_CITY',
            payload: city,
        })
    }

    const handleOnEdit = () => {
        dispatch({
            type: 'EDIT_CITY',
            payload: city,
        })
    }

    return (
        <div className="Card">
            <div className="ActionButtonWrap">
                <button className='ActionButton' onClick={handleOnEdit}>Edit</button>
                <button className='ActionButton' onClick={handleOnDelete}>X</button>
            </div>
            <div className='MainInfo'>
                <img className='Icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' />
                <div className='Title'>{name}</div>
                <div className='Description'>{description}</div>
                <div className='Temperature'>{temp.toFixed()}</div>
            </div>
            <div className='Information'>
                <div>Humidity: {humidity}</div>
                <div>Fils like: {feels_like}</div>
            </div>
        </div>
    );

};

export const Card = memo(CardNoMemo);
