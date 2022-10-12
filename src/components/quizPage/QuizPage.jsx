import React from 'react';
import QuizSolution from '../quizsolution/QuizSolution';

const QuizPage = ({ ques}) => {

    const { correctAnswer, question, id, options } = ques;
    return (
        <div>

            <section className="p-6">
                <div className="container mx-50%">
                    <h2 className="text-9xl font-bold text-center text-gray-50 bg-stone-600"> {question}</h2>
                    
                                {
                                    options.map(p => <QuizSolution quiz={p} 
                                        key={id}
                                        correctAnswer={correctAnswer}></QuizSolution>)
                                }
                    
                </div>
            </section>

        </div>
    );
};

export default QuizPage;