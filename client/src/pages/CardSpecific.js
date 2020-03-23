import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {
    MTH_CARDS_API,
    HEROKU_BYPASS_CORS
} from './../components/constants/constants';
import { Link } from 'react-router-dom';
import CardClick from '../components/card-specific';

export default function CardSpecific() {
    let { id } = useParams();
    const [cardResult, setCardResult] = useState(undefined);

    useEffect(() => {
        axios.get(HEROKU_BYPASS_CORS + MTH_CARDS_API + '/' + id)
            .then((result) => {
                setCardResult(result.data.card);
            })
    }, [id])
    console.log(cardResult);

    return (
        <div>
            <div className='row'>
                <div className='col-sm-12'>
                    <h1 className='heading'>Card Specific</h1>
                </div>
                <div className='col-sm-12'>
                    {
                        (cardResult !== undefined) ?
                            <CardClick
                                name={cardResult.name}
                                imageUrl={cardResult.imageUrl}
                                colors={cardResult.colors}
                                rarity={cardResult.rarity}
                                text={cardResult.text}
                            /> :
                            <div className='d-flex justify-content-center col-md-6'>
                                <img className='w-100' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                            </div>
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <button className='btn btn-primary'><Link to='/'>{'Back to Homepage'}</Link></button>
            </div>
        </div>
    )
}