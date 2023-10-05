

import Home from "./components/pages/home";
import About from "./components/pages/about";
import RootLayout from "./components/root/root";
import CustomErrorElement from "./components/navigation/errorElement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/', 
    element:<RootLayout />,
    errorElement:<CustomErrorElement/>,
    children:[
      {path: '/', element: <Home />},
      {path:'/about', element: <About/>},
      {path:'/about/2', element: <About/>}
    ]},
]);

function App(){
  return  <div>
              <RouterProvider router = {router}/>
          </div>;
}

export default App;