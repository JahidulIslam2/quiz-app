import React from 'react';
import QuizSolution from '../quizsolution/QuizSolution';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { toast} from 'react-toastify';
const QuizPage = ({ ques,name}) => {

const p=name;
    
    const showToastMessage = () => {
        toast.success(`${correctAnswer}`, {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    

    const { correctAnswer, question, id, options } = ques;
    console.log(ques)
    return (
        <div>

            <section className="p-6">
                <div className="container mx-50%">
                    <h2 className="text-9xl font-bold text-center text-gray-50 bg-stone-600"> <span>Quiz-{p}</span> {question}</h2> <button onClick={showToastMessage}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>

                                {
                                    options.map(p => <QuizSolution quiz={p} 
                                        key={id}
                                        correctAnswer={correctAnswer} ></QuizSolution>)
                                }
                    
                </div>
            </section>

        </div>
    );
};

export default QuizPage;