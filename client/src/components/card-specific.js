import React from 'react';


const CardClick = (props) => {
    const { name, colors, rarity, imageUrl, text } = props;
    return (
        <>
            <div className='col-md-6 mt-3 m-auto'>
                <div className=''>
                    <div className='d-flex justify-content-center'>
                        <img className='card-img-top col-md-5' src={imageUrl} alt={name} />
                        <div className='mt-5'>
                            <h1 className='text-center mt-5'>{name}</h1>
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
