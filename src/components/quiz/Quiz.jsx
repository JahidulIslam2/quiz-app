import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizPage from '../quizPage/QuizPage';

const Quiz = () => {
    const quizData=useLoaderData();
    const question= quizData.data.questions;
    const {name}=quizData.data;
    return (
        <div>   
            <h1 className='text-2xl'> Quiz of {name}</h1>
            {
                question.map((items,id) => <QuizPage ques={items} name={name} key={id}></QuizPage>)
            }
       
        </div>
    );
};

export default Quiz;