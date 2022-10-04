import React, { useState } from 'react';

import { Card } from '../Card';
import { useForecast } from '../hooks/useForecast';

import '../App.js';
import { useParams } from 'react-router';
import { ListCard } from '../ListCard';

export const SingleCity = (props) => {
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast(cityCoord)

    let { city } = useParams();

    return (
        <div className='SingleCityWrap'>
            <Card city={city} setCityCoord={setCityCoord} />
            {data &&
                <div className='ListCards'>
                    {data.list.map(listCard => <ListCard listCard={listCard} key={listCard.dt}/>)}
                </div>
            }
        </div>
    )
};
