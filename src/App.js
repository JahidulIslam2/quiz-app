import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './root/Root';
import Error from './error/Error';
import Home from './components/home/Home';
import Quiz from './components/quiz/Quiz';
import Blog from './components/blog/Blog';
import { getLoader } from './components/loader/Loader';
function App() {
  const routes=createBrowserRouter([
    {path: '/',
     element:<Root></Root>,
    //  loader:getLoader,
     errorElement: <Error/>,
     children:[
      {
        path:'/home',
        loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
        element: <Home></Home>
        
      },
      {
          path:'/',
          loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
          element:<Home></Home>
      },
      {
        path:'/quiz:id',
        loader:async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element:<Quiz></Quiz>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
     ]
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
