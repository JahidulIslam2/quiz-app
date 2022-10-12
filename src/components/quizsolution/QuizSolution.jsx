import React from 'react';
import { useState } from 'react';




const QuizSolution = ({ quiz,correctAnswer}) => {
    // defaultChecked={value === {quiz}}

        const [Option,setOption]=useState(" ");

    const handlerQuizSolution=(e)=>{
        const getOption =(e.target.value);
        setOption(getOption)

        if(correctAnswer === Option){
           
           alert("true")
        }
        else{
            alert("false")
        }
     

    }

   


    return (
        <div>
            
            <div className="grid gap-6 my-9 lg:grid-cols-2 border w-44 bg-amber-300">
                <div>
                    <input type="radio" value={quiz} name="quiz" onChange={handlerQuizSolution} /><label for=" " className="block mb-2 text-sm text-gray-600">{quiz}</label>
                </div>
            </div>
        </div>
    );
};

export default QuizSolution;