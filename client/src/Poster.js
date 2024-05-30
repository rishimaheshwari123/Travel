import React from 'react';
import 'flowbite';
import p1 from './1.png';
import p2 from './2.png';
import p3 from './3.png';
import p4 from './4.png';

const Poster = () => {
    return (
        <div id='poster'>
            <div className='one'>
                <img src={p1} className='p1' alt="Poster 1" />
                <img src={p2} className='p2' alt="Poster 2" />
            </div>
            
        </div>
    )
}

export default Poster;
