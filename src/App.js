import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './root/Root';
import Error from './error/Error';
import Blog from './components/blog/Blog';
import Banner from './components/banner/Banner';
function App() {
  const routes=createBrowserRouter([
    {path: '/',
     element:<Root></Root>,
     errorElement: <Error/>,
     children:[
      {
        path:'/',
        element:<Banner></Banner>
      },
     {path:'/',
    element: <Blog></Blog>}
    
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
