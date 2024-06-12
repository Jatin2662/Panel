


import React from 'react';
import './MainPage.css';
import ATSresume from './ATSresume.js';
import Pdf from './Pdf.js';
import Questions from './Questions.js';
import Speech from './Speech.js';
import PdfConverter from './PdfConverter.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Move from './Move.js';
import Enter from './Enter.js';

function Main() {

    return (
        <BrowserRouter>
            <section className="main">
                <section className="left">
                    <Move />
                </section>

                <section className="right">
                    <Routes>
                        <Route path="/" element={<Enter />} />
                        <Route path="/ATSresume" element={<ATSresume />} />
                        <Route path="/Pdf" element={<Pdf />} />
                        <Route path="/Questions" element={<Questions />} />
                        <Route path="/Speech" element={<Speech />} />
                        <Route path="/PdfConverter" element={<PdfConverter />} />
                    </Routes>
                </section>

            </section>
        </BrowserRouter>
    );
}

export default Main;