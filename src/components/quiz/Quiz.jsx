import React from 'react';
// import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { DataContext } from '../../root/Root';
import QuizPage from '../quizPage/QuizPage';

const Quiz = () => {

    
    const quizData=useLoaderData();
    const question= quizData.data.questions;
    console.log(question)
    const {name}=quizData.data;
    return (
        <div>   
            <h1 className='text-2xl'> Quiz of {name}</h1>
            {
                question.map((items,id) => <QuizPage ques={items} name={id} key={id}></QuizPage>)
            }
       
        </div>
    );
};

export default Quiz;