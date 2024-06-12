


import React from 'react';


function Questions(){

    var questions = [
        {
            id : 1,
            ques : "Kya aap panda hai?"
        },
        {
            id : 2,
            ques : "Panda di saheli da naam?"
        },
        {
            id : 3,
            ques : "Panda kine salan toh maje le reha hai?"
        },
        {
            id : 4,
            ques : "Panda karega Bale Bale?"
        },
        {
            id : 5,
            ques : "Panda party dega?"
        },
        {
            id : 1,
            ques : "Kya aap panda hai?"
        },
        {
            id : 2,
            ques : "Panda di saheli da naam?"
        },
        {
            id : 3,
            ques : "Panda kine salan toh maje le reha hai?"
        },
        {
            id : 4,
            ques : "Panda karega Bale Bale?"
        },
        {
            id : 5,
            ques : "Panda party dega?"
        },
        {
            id : 1,
            ques : "Kya aap panda hai?"
        },
        {
            id : 2,
            ques : "Panda di saheli da naam?"
        },
        {
            id : 3,
            ques : "Panda kine salan toh maje le reha hai?"
        },
        {
            id : 4,
            ques : "Panda karega Bale Bale?"
        },
        {
            id : 5,
            ques : "Panda party dega?"
        },
    ]

    return(
        <section className="questions-box">
            <h2>Questions</h2>
            <div className="questions">
                {questions.map((q)=>{

                    const {id, ques} = q;

                    return(
                        <div key={id} className='ques'>
                            <div>{ques}</div>
                            <hr></hr>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Questions;