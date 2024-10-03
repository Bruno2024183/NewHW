import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
    };
  }

  // Parte I: shouldComponentUpdate
  shouldComponentUpdate() {
    return true; // Cambia a false para prevenir la actualización del color.
  }

  // Parte II: componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      console.log("after update");
    }
  }

  // Parte III: getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  // Cambiar el color después de 2 segundos
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
      </div>
    );
  }
}

export default Color;