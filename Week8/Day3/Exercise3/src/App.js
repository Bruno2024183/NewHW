import React, { Component } from 'react';

class Child extends Component {
  // Método que se llama cuando el componente va a ser desmontado
  componentWillUnmount() {
    alert('The component named Header is about to be unmounted.');
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    // Parte I: Definir el estado show, inicialmente true
    this.state = { show: true };
  }

  // Método para cambiar el estado show a false y desmontar el Child
  deleteHeader = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        {/* Mostrar el componente Child si show es true */}
        {this.state.show ? <Child /> : null}

        {/* Botón para desmontar el componente Child */}
        <button onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

export default App;