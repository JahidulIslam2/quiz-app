import React from 'react';
import { useRouteError } from 'react-router-dom';
// import { useLottie } from "lottie-react";
// import { errorAnimation } from "../assest/anim.json";
const Error = () => {
    const error=useRouteError();
    console.error(error);

    // const options = {
    //     animationData: errorAnimation,
    //     loop: true
    //   };
    //   const { View } = useLottie(options);
    return (
        <div>
            {/* <>{View}</> */}
            <h1> Oops</h1>
            <p>
                 <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Error;