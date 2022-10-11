import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizPage from '../quizPage/QuizPage';

const Quiz = () => {
    const quizData=useLoaderData();
    const question= quizData.data.questions;
    return (
        <div>
            {
                question.map(items => <QuizPage ques={items}></QuizPage>)
            }
       
        </div>
    );
};

export default Quiz;