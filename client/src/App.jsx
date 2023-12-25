import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Login from "./components/Login/Login";
import About from "./components/About/About";
import Header from './components/GlobalComponents/Header';
import { useEffect } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
    </Route>
  )
)



const App = () => {
  

  return (
    <>
    <Login />
     {/* <RouterProvider router={router}/> */}
    </>
      
  )
}

export default App