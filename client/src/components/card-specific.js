import React from 'react';

const CardClick = (props) => {
    const { name, colors, rarity, imageUrl, text } = props;
    return (
        <>
            <div className='col-8 col-md-8 mt-3 m-auto'>
                <div className=''>
                    <div className='d-flex justify-content-center mt-5 flex-wrap'>
                        <img className='card-img-top-secific col-12 col-md-6' src={imageUrl} alt={name}/>
                        <div className='mt-5 col-12 col-md-6'>
                            <h2 className=' mt-5'>{name}</h2>
                            <p><b>Color:</b> {colors}</p>
                            <p><b>Rarity:</b> {rarity}</p>
                            <p><b>About:</b> {text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardClick;
