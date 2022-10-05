import React from 'react';

import '../App.js';

export const ListCard = ({ listCard }) => {

    const { dt, weather, main:{temp} } = listCard;
    const { main, icon } = weather[0];
    const currentDate = new Date(dt*1000);

    return (
        <div className='ListCard'>
            <div>{currentDate.toString().split(' ')[4].substring(0,5) }</div>
            <div>{currentDate.toString().split(' ')[1] } {currentDate.toString().split(' ')[2] }</div>
            <img className='Icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' />
            <div className='TemperatureIcon'>{temp.toFixed()}</div>
            <div>{main}</div>
        </div>
    )
};
