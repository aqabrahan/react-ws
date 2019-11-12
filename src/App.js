import React, { Component, Suspense } from 'react';
import './App.css';
import Comp from './components/suspense';
//const Comp = React.lazy(() => import('./components/suspense'));
class App extends Component {
  render() {
    return (
      <div className="context">
          <Comp />
      </div>
    );
  }
}

export default App;
