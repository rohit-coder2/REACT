import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, NavLink , Route , Routes} from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import LogPage from './peges/logpage'
import MyForm from './peges/singpage'
import FieldFill from './peges/datapage'
import EditPage from './peges/editpage'
function App() {
  return (
    <>
      <BrowserRouter>
      <div className="container1">
        
    <div className="logo">
      react
    </div>
      <div className="navlinks">
        <NavLink to="/sing"  className={'nav1'}>Sing Up </NavLink>
        <NavLink to="/login" className={'nav2'} >Log In </NavLink>
        <NavLink to="/list" className={'nav3'}>DataList </NavLink>
      </div>
      </div>
        <Routes>
        <Route path="/login" element={<LogPage />} />
        <Route path="/sing" element={<MyForm />} />
        <Route path="/list" element={<FieldFill />} />
        <Route path="list/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
