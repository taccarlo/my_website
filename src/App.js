

import React, { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Importazioni immediate per pagine critiche
import Home from "./components/pages/home";
import About from "./components/pages/about";
import RootLayout from "./components/root/root";
import CustomErrorElement from "./components/navigation/errorElement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyGithub from "./components/pages/myGithub";
import './style/style.css';

// Code-splitting: Lazy loading per pagine didattiche e più pesanti
const Didattica = React.lazy(() => import("./components/pages/didattica"));
const GTSA = React.lazy(() => import("./components/pages/GTSA"));
const EdCivica = React.lazy(() => import("./components/pages/edCivica/edCivica.js"));
const Binario = React.lazy(() => import("./components/pages/binario/binario.js"));
const Serie01Binario = React.lazy(() => import("./components/pages/binario/serie01"));
const Serie02Binario = React.lazy(() => import("./components/pages/binario/serie02"));
const AlgebraBooleana = React.lazy(() => import("./components/pages/algebrabooleana/algebrabooleana"));
const IndirizziIP = React.lazy(() => import("./components/pages/indirizzoip/indirizzoip"));
const DiagrammiDiFlusso = React.lazy(() => import("./components/pages/diagrammidiflusso/diagrammidiflusso"));
const Estrattoredinumeri = React.lazy(() => import("./components/pages/estrattoredinumeri/estrattoredinumeri"));
const CountDown = React.lazy(() => import("./components/pages/countdown/countdown"));
const Testbench = React.lazy(() => import("./components/pages/testbench/testbench"));
const TTS = React.lazy(() => import("./components/pages/testbench/tts"));

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
      {path:'/didattica/estrattoredinumeri', element: <Estrattoredinumeri/>},
      {path:'/testbench', element: <Testbench/>},
      {path:'/testbench/tts', element: <TTS/>}
    ]},
]);

function App(){
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;