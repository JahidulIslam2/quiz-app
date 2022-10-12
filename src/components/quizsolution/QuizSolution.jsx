import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizSolution = ({ quiz,correctAnswer }) => {
    // defaultChecked={value === {quiz}}

        const [Option,setOption]=useState("");

    const handlerQuizSolution=(e)=>{
        const getOption =(e.target.value);
        setOption(getOption)

        if(correctAnswer === Option){
           
           
           
        }
        else{
            alert('false')
        }
        <ToastContainer/>

    }

    // const showToastMessage = () => {
    //     toast.success('Complete Activity..', {
    //         position: toast.POSITION.TOP_RIGHT
    //     });
    // };
    

    return (
        <div>
            
            <div className="grid gap-6 my-9 lg:grid-cols-2 border w-44 bg-amber-300">
                <div onChange={handlerQuizSolution}>
                    <input type="radio" value={quiz} name={quiz} /><label for=" " className="block mb-2 text-sm text-gray-600">{quiz}</label>
                </div>
            </div>
        </div>
    );
};

export default QuizSolution;