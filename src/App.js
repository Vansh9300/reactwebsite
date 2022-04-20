import React from 'react'
import './style.min.css'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import About from './About';
import Product from './Product';
import Item from './Item';
import Hero from './Hero';
const App = () => {
  return (
    <>
  <Router>
    <Switch>
      <Route exact path="/">
        <Navbar />
        <Hero />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/product">
        <Navbar />
        <Product />
      </Route>
      <Route exact path="/item">
        <Navbar />
        <Item />
      </Route>
    </Switch>
  </Router>
    </>
  )
}

export default App
