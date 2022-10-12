import React from 'react';

import { toast } from 'react-toastify';




const QuizSolution = ({ quiz,correctAnswer}) => {
    // defaultChecked={value === {quiz}}

        // const [Option,setOption]=useState(" ");

    const handlerQuizSolution=(e)=>{
        console.log(e)
        // const getOption =(e.target.value);
        // setOption(getOption)

        if(correctAnswer === e){
           
           return toast.success(correctAnswer,[500]);
        }
        else{
          return toast.error('not a correct ans',[500])
        }
     

    }

   


    return (
        <div>
            
            <div className="grid gap-6 my-9 lg:grid-cols-2 border w-44 bg-amber-300">
                <div>
                    <input type="radio" value={quiz} name="quiz" onClick={()=>handlerQuizSolution(quiz)} /><label for=" " className="block mb-2 text-sm text-gray-600">{quiz}</label>
                </div>
            </div>
        </div>
    );
};

export default QuizSolution;