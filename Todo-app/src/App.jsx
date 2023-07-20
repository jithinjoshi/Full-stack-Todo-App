import React from 'react';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { SignUp } from './components/Signup/Signup';
import { SignIn } from './components/signin/Signin';
import TodoList from './components/todoList/TodoList';

const router = createBrowserRouter([
  {
    path:'/signup',
    element:<SignUp/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/signin',
    element:<SignIn/>
  },
  {
    path:'/',
    element:<TodoList/>
  }

])

function App() {
  return <RouterProvider router={router}/>
}

export default App
