import React from 'react';

const Blog = () => {
    return (
        <div  className='border-2 h-96 px-32'>
            <h1 className='text-2xl text-blue-600 font-bold underline'>Answer the question</h1>
            <div>
                <h1 className='text-xl font-bold'>What Is the Purpose Of React Router ..?</h1>
                <p>
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.
                </p>
            </div>

            <div>
                <h1 className='text-xl font-bold'>How Does Context Api Works ..?</h1>
                <p>
                     Context provides a way to pass data through the component tree without having to pass props down manually at every level
                </p>
            </div>
            <div className=''>
                <h1  className='text-xl font-bold' >How Does UseRef Work In react.? .write someething about useRef..</h1>
                      The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            </div>
        </div>
    );
};

export default Blog;