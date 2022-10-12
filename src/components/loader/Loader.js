

export const getLoader = async()=>{
    const loaderData= await fetch('https://openapi.programming-hero.com/api/quiz');
    const data = await loaderData.json()
    return data ;
}

