import React  from 'react';

import '../App.js';
import { useParams } from 'react-router';

export const ListCard = ({listCard}) => {
    console.log('listCard',listCard);
    const { dt, weather, temp } = listCard;
    const { main, icon } = weather[0];
    return (
        <div className='ListCard'>
            <img className='Icon' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' />

        </div>
    )
};
