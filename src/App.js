import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './root/Root';
import Error from './error/Error';
import Home from './components/home/Home';
function App() {
  const routes=createBrowserRouter([
    {path: '/',
     element:<Root></Root>,
     errorElement: <Error/>,
     children:[
      {
        path:'/',
        loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
        element: <Home></Home>
        
      },
     
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
