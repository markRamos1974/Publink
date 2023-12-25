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
    <div className='w-full h-screen md:h-fit relative bg-mobile bg-no-repeatrelative px-10 py-9 md:bg-tablet xl:bg-extraLarge lg:bg-large bg-cover'>
    <Login />
     {/* <RouterProvider router={router}/> */}
    </div>
      
  )
}

export default App