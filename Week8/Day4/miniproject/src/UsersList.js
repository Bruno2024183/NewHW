import React, { Component } from 'react';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      errorMsg: ''
    };
  }

  // Llamada a la API usando componentDidMount
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data, isLoading: false });
      })
      .catch(error => {
        this.setState({ errorMsg: 'Error fetching users', isLoading: false });
      });
  }

  render() {
    const { users, isLoading, errorMsg } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>List of users:</h1>
        <ul>
          {users.length ? (
            users.map(user => (
              <li key={user.id}>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>City:</strong> {user.address.city}</p>
              </li>
            ))
          ) : (
            <p>{errorMsg}</p>
          )}
        </ul>
      </div>
    );
  }
}

export default UsersList;