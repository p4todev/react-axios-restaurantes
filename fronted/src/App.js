import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import './App.css'


const App = () => {
  return (
    <Router>
        <Route path="/" component={Inicio} exact/>
    </Router>
  )
}

export default App


