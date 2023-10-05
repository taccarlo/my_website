

import Home from "./components/pages/home";
import About from "./components/pages/about";
import RootLayout from "./components/root/root";
import CustomErrorElement from "./components/navigation/errorElement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import packageJson from '../package.json';



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
              <nav style = { {  position: 'absolute',  bottom:0, right:10}} className="navbar navbar-light">
                <p>{packageJson.name} V. {packageJson.version}</p>
              </nav>
              <CookieConsent buttonText="OK" >Questo sito utilizza cookies per migliorare la tua esperienza utente.</CookieConsent>
          </div>;
}

export default App;