import React from 'react';
import './App.css';
import Row from './components/hooks/row';

const App = () => {
  return (
    <div className="container">
      <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
      </div>
      <section>
        <Row label="Name" />
      </section>
    </div>
  );
}

export default App;
