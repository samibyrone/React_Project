import { useState } from 'react';
import Login from './auth/Login';
import SignUp from './auth/SignUp'
import './App.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './router/routes.jsx';

const router = createBrowserRouter([...routes]);


function App() {

  return (
    <div>
      {/* <style > */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
