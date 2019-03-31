import React, { Component } from 'react'
import Mylayout from './layout/mylayout';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Cart from './views/Cart';
import Mine from './views/Mine';

export class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <Router>
            <Switch>
            <Route exact path="/" render={(props)=><Mylayout {...props}><Home></Home></Mylayout>}></Route>
            <Route  path="/cart" render={(props)=><Mylayout {...props}><Cart></Cart></Mylayout>}></Route>
            <Route  path="/mine" render={(props)=><Mylayout {...props}><Mine></Mine></Mylayout>}></Route>
            </Switch>
        </Router>
      </div>
   
    )
  }
}

export default App
