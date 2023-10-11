

import Home from "./components/pages/home";
import About from "./components/pages/about";
import RootLayout from "./components/root/root";
import CustomErrorElement from "./components/navigation/errorElement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyGithub from "./components/pages/myGithub";
import Didattica from "./components/pages/didattica";
import GTSA from "./components/pages/GTSA";
import EdCivica from "./components/pages/edCivica.js";
import Binario from "./components/pages/binario.js";
import './style/style.css';

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
      {path:'/didattica/edCivica', element: <EdCivica/>},
      {path:'/didattica/binario', element: <Binario/>}
    ]},
]);

function App(){
  return  <div>
              <RouterProvider router = {router}/>
          </div>;
}

export default App;