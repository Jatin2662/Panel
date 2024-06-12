

import React, { useState } from 'react';
import './MainPage.css';

function Speech() {

    const [spi, setSpi] = useState('');

    const get = ()=>{
        console.log(spi);
        setSpi('');
    }

    const handleText = (e)=>{
        setSpi(e.target.value)
    }

    return (
        <section className="speech">
            <div className="speech-input">
                <label htmlFor="w3review">Enter:</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50" value={spi} onChange={handleText}>
                </textarea>
            </div>
            <div className="btn">
                <button className="play" onClick={get}>Play</button>
            </div>
        </section>
    );
}

export default Speech;