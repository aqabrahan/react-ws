import React, { Component, Suspense, lazy } from 'react';
import './App.css';
//import Comp from './components/suspense';
//const Comp = React.lazy(() => import('./components/suspense'));
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorBoundary from './components/suspense/errorBoundary';

/* import Home from './components/suspense/home';
import Graph from './components/suspense/graph';
import Images from './components/suspense/images'; */
const Home = lazy(() => import('./components/suspense/home'));
const Graph = lazy(() => import('./components/suspense/graph'));
const Images = lazy(() => import('./components/suspense/images'));
class App extends Component {
  render() {
    return (
      <div className="context">
          <Router>
            <ErrorBoundary>
            <Suspense fallback={<div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/graph" component={Graph} />
                <Route path="/images" component={Images} />
              </Switch>
              </Suspense>
              </ErrorBoundary>
          </Router>
      </div>
    );
  }
}

export default App;
