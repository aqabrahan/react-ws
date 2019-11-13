import React from 'react';
import './App.css';
import Row from './components/hooks/row';

const App = () => {
  return (
    <div className="container">
      <section>
        <Row label="Name" />
      </section>
    </div>
  );
}

export default App;
