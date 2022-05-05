import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login/Login'
import Dashboard from './component/Dashboard/Dashboard'


const App = () => {
  return (
    <div className="app">
      <Login/>
      {/* <Routes> */}
           {/* <Route path='/' component={Dashboard}/> */}
            {/* <Route path='/login' component={Login}/>   */}
      {/* </Routes> */}
    </div>

  )
}

export default App