import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './root/Root';
import Error from './error/Error';
import Blog from './components/blog/Blog';
function App() {
  const routes=createBrowserRouter([
    {path: '/',
     element:<Root></Root>,
     errorElement: <Error/>,
     children:[
     {path:'blog',
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
