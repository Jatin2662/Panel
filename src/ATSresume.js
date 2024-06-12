import React, { useState } from 'react';
import './MainPage.css';

function ATSresume() {
    const [score, setScore] = useState(0);
    const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState('');

    const yourScore = () => {
        const num = Math.ceil(Math.random() * 10);
        setScore(num);
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
            const fileURL = URL.createObjectURL(selectedFile);
            setFileURL(fileURL);
        } else {
            alert('Please upload a PDF file.');
            setFile(null);
            setFileURL('');
        }
    }

    return (
        <section className="ats">
            <h1>Get your Resume score</h1>
            <section className="ats-box">
                <div className="inputs">
                    <input type="file" id="file-input" accept='application/pdf' onChange={handleFileChange} required />
                    <button onClick={yourScore}>Score</button>
                    <div>Score: {score}</div>
                </div>

                <div className="preview">{file && (
                    <div>
                        <h2>Selected file: {file.name}</h2>
                        {fileURL && <iframe src={fileURL} title={file.name} width="600" height="400" />}
                    </div>
                )}</div>
            </section>
        </section>
    );
}

export default ATSresume;



