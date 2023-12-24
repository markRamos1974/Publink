import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Login from "./components/Login/Login";
import About from "./components/About/About";
import Header from './components/GlobalComponents/Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
    </Route>
  )
)

function App({ routes }) {
  return (
    <>
     <RouterProvider router={router}/>
     <h1>Hello</h1>
    </>
      
  )
}

export default App