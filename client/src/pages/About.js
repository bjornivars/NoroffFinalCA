import React, { useState } from 'react';

export default function About() {
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(true);
    }
    const handleSecondClick = () => {
        setShowMore(false);
    }

    return (
        <div className='mt-5'>
            <div className='col-md-5 m-auto '>
                <h1 className='heading'>About us</h1>
            </div>
            <div>
                <div className='d-flex justify-content-center mb-5 mt-3'>
                    <button className='accordionP text-center btn btn-primary m-auto' onClick={(showMore !== true) ? handleClick : handleSecondClick}
                    >Read more about us!</button>
                </div>
                <div className={(showMore !== true) ? 'd-none' : 'd-block unstyledUl col-md-6 m-auto'}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a feugiat mi.
                        Duis sodales metus pulvinar eros scelerisque, id cursus lacus lacinia. Quisque commodo
                        justo at nibh rutrum, vitae vestibulum odio rutrum. Proin eget velit purus. Aliquam erat volutpat. Integer egestas enim sit amet bibendum molestie. Donec in gravida odio.
                        In interdum odio id urna tempus, efficitur tincidunt massa aliquam.
                        Praesent pharetra velit sed justo scelerisque facilisis.
                    </p>
                    <p>
                        Mauris varius nisi vitae interdum ultricies. Quisque a dui et libero lacinia sollicitudin.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Donec faucibus vestibulum odio, ut interdum velit laoreet ac.
                    </p>
                </div>
            </div>
        </div>
    )
}