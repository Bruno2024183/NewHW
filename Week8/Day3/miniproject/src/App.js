import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import ColumnLeft from './columns/ColumnLeft';
import ColumnRight from './columns/ColumnRight';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Error boundaries in react</h1>
      </header>
      <div className="row">
        <div className="col-md-4">
          <ColumnLeft />
        </div>
        <div className="col-md-8">
          <ErrorBoundary>
            <ColumnRight />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;