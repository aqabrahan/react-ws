import React, { Component, Suspense, lazy } from 'react';
import './App.css';
//import Comp from './components/suspense';
//const Comp = lazy(() => import('./components/suspense'));
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import ErrorBoundary from './components/suspense/errorBoundary';
//import Loading from './components/suspense/loading';

import Home from './components/suspense/home';
import Graph from './components/suspense/graph';
import Images from './components/suspense/images';
/* const Home = lazy(() => import('./components/suspense/home'));
const Graph = lazy(() => import('./components/suspense/graph'));
const Images = lazy(() => import('./components/suspense/images')); */
class App extends Component {
  render() {
    return (
      <div className="context">
          <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/graph" component={Graph} />
                <Route path="/images" component={Images} />
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
