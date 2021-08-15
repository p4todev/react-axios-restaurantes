import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Inicio from './pages/Inicio'
import './App.css'
import Restaurantes from './pages/Restaurantes'


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" component={Inicio} exact/>
      <Route path="/restaurantes/lista" component={Restaurantes} exact/>

      </Switch>
    </Router>
  )
}

export default App


