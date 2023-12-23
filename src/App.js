

import Home from "./components/pages/home";
import About from "./components/pages/about";
import RootLayout from "./components/root/root";
import CustomErrorElement from "./components/navigation/errorElement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyGithub from "./components/pages/myGithub";
import Didattica from "./components/pages/didattica";
import GTSA from "./components/pages/GTSA";
import EdCivica from "./components/pages/edCivica/edCivica.js";
import Binario from "./components/pages/binario/binario.js";
import './style/style.css';
import Serie01Binario from "./components/pages/binario/serie01";
import Serie02Binario from "./components/pages/binario/serie02";
import AlgebraBooleana from "./components/pages/algebrabooleana/algebrabooleana";
import IndirizziIP from "./components/pages/indirizzoip/indirizzoip";
import DiagrammiDiFlusso from "./components/pages/diagrammidiflusso/diagrammidiflusso";
import Estrattoredinumeri from "./components/pages/estrattoredinumeri/estrattoredinumeri";
import CountDown from "./components/pages/countdown/countdown";

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
      {path:'/didattica/countdown', element: <CountDown/>},
      {path:'/didattica/edCivica', element: <EdCivica/>},
      {path:'/didattica/binario', element: <Binario/>},
      {path:'/didattica/binario/serie01', element: <Serie01Binario/>},
      {path:'/didattica/binario/serie02', element: <Serie02Binario/>},
      {path:'/didattica/indirizziip', element: <IndirizziIP/>},
      {path:'/didattica/diagrammidiflusso', element: <DiagrammiDiFlusso/>},
      {path:'/didattica/algebrabooleana', element: <AlgebraBooleana/>},
      {path:'/didattica/estrattoredinumeri', element: <Estrattoredinumeri/>}
    ]},
]);

function App(){
  return  <div>
              <RouterProvider router = {router}/>
          </div>;
}

export default App;