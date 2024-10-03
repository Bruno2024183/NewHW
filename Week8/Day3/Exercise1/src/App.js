import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div>
      <h1>Simulation 1: Both counters in one ErrorBoundary</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 2: Each counter in its own ErrorBoundary</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 3: Counter without ErrorBoundary</h1>
      <BuggyCounter />
    </div>
  );
}

export default App;