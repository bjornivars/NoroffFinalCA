import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ imageUrl, name, id }) => {
    //console.log('test navbar');
    return (
        <div className='col-md-3 mt-4 mb-4 rmCard'>
            <div className='card'>
                <img className='card-img-top' src={imageUrl} alt='Card cap' />
                <div className='card-body p-3'>
                    <h5 className='card-title'>{name}</h5>
                    <div className='d-flex justify-content-between'>
                        <Link className='btn btn-primary' to={`/card-specific/${id}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards; 