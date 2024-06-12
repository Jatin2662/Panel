


import React from "react";
import './MainPage.css';
import { Link, useLocation } from "react-router-dom"; 

function Move(){

    const location = useLocation();

    var data = [
        {
            id: 1,
            title: "ATS Resume",
            route: "/ATSresume"
        },
        {
            id: 2,
            title: "Questions",
            route: "/Questions"
        },
        {
            id: 3,
            title: "Speech",
            route: "/Speech"
        },
        {
            id: 4,
            title: "Pdf",
            route: "/Pdf"
        },
        {
            id: 5,
            title: "Pdf Converter",
            route: "/PdfConverter"
        }
    ]

    return(
        <div className="buttons">
                    {data.map((item) => {
                        const { id, title, route } = item;

                        return (
                            <div key={id} className={`button ${location.pathname === route ? 'active' : ''}`}>
                                <Link to={route} className="links">{title}</Link>
                            </div>
                        );
                    })}
                  
                </div>
    );
}

export default Move;