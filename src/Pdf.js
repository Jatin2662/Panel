



import React, { useState } from 'react';


function Pdf() {

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const get = () => {
        console.log(start);
        console.log(end);
    }


    return (
        <section className="pdf-box">
            <div className="pdf1">
                <label htmlFor='file-input'>Your file here : </label>
                <input type="file" id="file-input" accept='pdf/' required></input>
            </div>

            <main className="pdf2">
                <div>
                    <label htmlFor='file-input1'>Start from :  </label>
                    <input type="number" id="file-input1" onChange={(e) => setStart(e.target.value)} value={start} required ></input>
                </div>
                <div>
                    <label htmlFor='file-input2'>End here :  </label>
                    <input type="number" id="file-input2" onChange={(e) => setEnd(e.target.value)} value={end} required></input>
                </div>
            </main>

            <div className="btn">
                <button className="play" onClick={get}>Play</button>
            </div>
        </section>
    );
}

export default Pdf;