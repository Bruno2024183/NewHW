import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Se ejecuta cuando ocurre un error en el árbol de componentes hijos
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Captura los detalles del error y la traza de los componentes
  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('Error captured:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card my-5">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
          <button onClick={() => window.location.reload()}>Reload the page</button>
        </div>
      );
    }

    return this.props.children; // Si no hay errores, renderiza los hijos normalmente
  }
}

export default ErrorBoundary;