import React, { useState } from 'react';

import { Card } from '../Card';
import { useForecast } from '../hooks/useForecast';

import '../App.js';
import { useParams } from 'react-router';

export const SingleCity = (props) => {
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast(cityCoord)
    console.log('data', data);
    let { city } = useParams();

    return (
        <div className='Main'>
            <Card city={city} setCityCoord={setCityCoord} />
        </div>
    )
};
