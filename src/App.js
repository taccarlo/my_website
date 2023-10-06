

import Home from "./components/pages/home";
import About from "./components/pages/about";
import RootLayout from "./components/root/root";
import CustomErrorElement from "./components/navigation/errorElement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyGithub from "./components/pages/myGithub";
import Didattica from "./components/pages/didattica";
import GTSA from "./components/pages/GTSA";
import EdCivica from "./components/pages/edCivica.js";

const router = createBrowserRouter([
  {
    path:'/', 
    element:<RootLayout />,
    errorElement:<CustomErrorElement/>,
    children:[
      {path: '/', element: <Home />},
      {path:'/about', element: <About/>},
      {path:'/myGithub', element: <MyGithub/>},
      {path:'/didattica', element: <Didattica/>},
      {path:'/GTSA', element: <GTSA/>},
      {path:'/edCivica', element: <EdCivica/>}
    ]},
]);

function App(){
  return  <div>
              <RouterProvider router = {router}/>
          </div>;
}

export default App;